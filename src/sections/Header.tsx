import { useEffect, useState } from 'react';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { useCart } from "../components/CartContext";
import logo from '../assets/Logo2.png';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { cart, increase, decrease } = useCart();

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const finishOrder = () => {

        if (cart.length === 0) {
            alert("Seu carrinho está vazio");
            return;
        }

        let message = "*📦 NOVO PEDIDO*\n";
        message += "Olá! Gostaria de fazer o seguinte pedido:\n";
        message += "--------------------------\n";

        cart.forEach(item => {
            message += `🔹 *${item.name}*\n`;

            if (item.selectedOptions) {
                item.selectedOptions.forEach(opt => {
                    message += `   • ${opt.group}: ${opt.value}\n`;
                });
            }

            message += `   ${item.quantity} un. - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
        });

        message += "--------------------------\n";
        message += `💰 *Total: R$ ${totalPrice.toFixed(2)}*`;

        const phone = "5546999806621";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 🔥 trava scroll da página
    useEffect(() => {
        document.body.style.overflow = isCartOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isCartOpen]);

    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <>
            {/* HEADER */}
            <header
                className={`fixed top-0 w-full z-50 shadow-md transition-all duration-500
                ${isScrolled ? 'py-2 bg-lime-900/90 backdrop-blur-sm' : 'py-4 md:py-1 bg-[#cdb49e]'}`}
            >

                <div className="container mx-auto px-4 md:px-3 flex items-center justify-between font-serif font-bold">

                    <img
                        src={logo}
                        alt="Logo"
                        className={`transition-all duration-500 ${isScrolled ? 'w-24 md:w-24' : 'w-32 md:w-24'}`}
                    />

                    <nav className="flex items-center">

                        <ul className="hidden md:flex space-x-6 text-xl">
                            <li><a href="#galeria" className="text-amber-800 hover:text-white">Galeria</a></li>
                            <li><a href="#services" className="text-amber-800 hover:text-white">Serviços</a></li>
                            <li><a href="#location" className="text-amber-800 hover:text-white">Localização</a></li>
                            <li><a href="#faleconosco" className="text-amber-800 hover:text-white">Fale Conosco</a></li>
                        </ul>

                        {/* CARRINHO */}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative text-orange-400 ml-6 hover:scale-110 transition"
                        >
                            <FaShoppingCart size={28} />

                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                                    {totalItems}
                                </span>
                            )}
                        </button>

                        {/* MENU MOBILE */}
                        <button
                            className="md:hidden text-orange-300 border-l border-gray-300 pl-4 ml-4"
                            onClick={handleMenuToggle}
                        >
                            <FaBars size={30} />
                        </button>

                    </nav>
                </div>

                {/* MENU MOBILE */}
                {isMenuOpen && (
                    <div className="md:hidden bg-lime-900/90 backdrop-blur-sm">
                        <ul className="flex flex-col items-center space-y-4 p-4">
                            <li><a href="#galeria" onClick={handleMenuToggle} className="text-orange-300">Galeria</a></li>
                            <li><a href="#services" onClick={handleMenuToggle} className="text-orange-300">Serviços</a></li>
                            <li><a href="#location" onClick={handleMenuToggle} className="text-orange-300">Localização</a></li>
                            <li><a href="#faleconosco" onClick={handleMenuToggle} className="text-orange-300">Fale Conosco</a></li>
                        </ul>
                    </div>
                )}
            </header>

            {/* OVERLAY */}
            {isCartOpen && (
                <div
                    onClick={() => setIsCartOpen(false)}
                    className="fixed inset-0 bg-black/40 z-[998]"
                />
            )}

            {/* CARRINHO */}
            <div className={`
                fixed top-0 right-0 h-full w-[320px] md:w-[400px]
                bg-white shadow-2xl z-[999]
                transform transition-transform duration-300
                ${isCartOpen ? "translate-x-0" : "translate-x-full"}
            `}>

                <div className="flex flex-col h-full">

                    {/* HEADER */}
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-lg font-bold">Carrinho</h2>
                        <button onClick={() => setIsCartOpen(false)}>✕</button>
                    </div>

                    {/* LISTA */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">

                        {cart.length === 0 && (
                            <p className="text-center text-gray-500">
                                Seu carrinho está vazio
                            </p>
                        )}

                        {cart.map(item => (
                            <div
                                key={item.id + JSON.stringify(item.selectedOptions)}
                                className="flex gap-3 bg-gray-100 p-3 rounded-lg"
                            >
                                <img
                                    src={item.image}
                                    className="w-14 h-14 rounded object-cover"
                                />

                                <div className="flex-1">

                                    <p className="font-semibold">{item.name}</p>

                                    {item.selectedOptions && (
                                        <div className="text-xs text-gray-500">
                                            {item.selectedOptions.map((opt, i) => (
                                                <p key={i}>
                                                    {opt.group}: {opt.value}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    <p className="text-sm text-orange-500">
                                        R$ {item.price.toFixed(2)}
                                    </p>

                                    <div className="flex items-center gap-2 mt-1">
                                        <button onClick={() => decrease(item.id)} className="px-2 bg-gray-300 rounded hover:bg-gray-400">-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increase(item.id)} className="px-2 bg-gray-300 rounded hover:bg-gray-400">+</button>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* FOOTER COM TOTAL */}
                    <div className="p-4 border-t space-y-3">

                        <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>R$ {totalPrice.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={finishOrder}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
                        >
                            Finalizar pedido
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Header;