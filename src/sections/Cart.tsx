import { useCart } from "../components/CartContext";

export default function Cart() {

    const { cart, increase, decrease, total } = useCart();

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
            message += `   ${item.quantity} un. - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
        });

        message += "--------------------------\n";

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        message += `💰 *Total: R$ ${total.toFixed(2)}*`;

        const phone = "554699980662";

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.location.href = url;
    };

    return (

        <section className="bg-[#ADD8E6] p-6">

            <h2 className="text-2xl font-bold mb-4">
                Carrinho
            </h2>

            {cart.map(item => (

                <div
                    key={item.id}
                    className="flex justify-between items-center mb-4"
                >

                    <div>

                        <h3>{item.name}</h3>

                        <p>R$ {item.price}</p>

                    </div>

                    <div className="flex gap-3 items-center">

                        <button onClick={() => decrease(item.id)}>
                            -
                        </button>

                        {item.quantity}

                        <button onClick={() => increase(item.id)}>
                            +
                        </button>

                    </div>

                </div>

            ))}

            <h3 className="text-xl font-bold mt-4">
                Total: R$ {total}
            </h3>

            <button
                onClick={finishOrder}
                className="bg-green-500 text-white px-6 py-3 rounded-xl mt-4"
            >
                Finalizar Pedido
            </button>

        </section>
    );
}