import { useState } from "react";
import { useCart } from "../components/CartContext";
import { products, Product, ProductOption } from "../data/Products";

export default function ProductsSection() {

    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState<Record<number, number>>({});
    const [selectedOptions, setSelectedOptions] = useState<
        Record<number, Record<string, number>>
    >({});

    const increase = (id: number) => {
        setQuantity(prev => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

    const decrease = (id: number) => {
        setQuantity(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 1) - 1, 1)
        }));
    };

    // 🔥 função segura pra pegar índice default
    const getDefaultIndex = (options: ProductOption[] = []): number => {
        if (!options.length) return 0;

        const index = options.findIndex(o => o.default);
        return index >= 0 ? index : 0;
    };

    // 💰 cálculo de preço
    const getPrice = (product: Product): number => {
        if (!product.optionGroups) return product.price ?? 0;

        const sizeGroup = product.optionGroups.find(g => g.name === "Tamanho");

        if (!sizeGroup) return product.price ?? 0;

        const selectedIndex =
            selectedOptions[product.id]?.["Tamanho"] ??
            getDefaultIndex(sizeGroup.options);

        return sizeGroup.options[selectedIndex]?.price ?? 0;
    };

    return (
        <section id="ecomerce" className="bg-gray-100 py-10 scroll-mt-24">

            <div className="max-w-xl mx-auto flex flex-col gap-6 px-4">

                {products.map(product => {

                    const qty = quantity[product.id] || 1;
                    const price = getPrice(product);

                    return (
                        <div
                            key={product.id}
                            className="bg-[#cdb49e] rounded-2xl shadow-lg p-4 text-center"
                        >

                            <div
                                className="w-full h-48 sm:h-56 md:h-64 rounded-xl mb-3 bg-center bg-cover"
                                style={{ backgroundImage: `url(${product.image})` }}
                            />

                            <h2 className="text-xl font-bold">
                                {product.name}
                            </h2>

                            {/* 💰 PREÇO FORMATADO */}
                            <p className="text-orange-500 text-lg font-semibold">
                                R$ {price.toFixed(2)}
                            </p>

                            {/* 🔥 OPÇÕES */}
                            {product.optionGroups?.map(group => {

                                const selectedIndex =
                                    selectedOptions[product.id]?.[group.name] ??
                                    getDefaultIndex(group.options);

                                return (
                                    <div key={group.name} className="mt-3">
                                        <p className="text-sm font-semibold mb-1">
                                            {group.name}:
                                        </p>

                                        <div className="flex justify-center gap-2 flex-wrap">
                                            {group.type === "display" ? (

                                                // 🔹 SOMENTE TEXTO (SEM CLICK)
                                                <div className="flex justify-center gap-2 flex-wrap">
                                                    {group.options.map((opt, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 rounded-full text-sm bg-orange-500"
                                                        >
                                                            {opt.label}
                                                        </span>
                                                    ))}
                                                </div>

                                            ) : (

                                                // 🔥 NORMAL (CLICÁVEL)
                                                <div className="flex justify-center gap-2 flex-wrap">
                                                    {group.options.map((opt, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() =>
                                                                setSelectedOptions(prev => ({
                                                                    ...prev,
                                                                    [product.id]: {
                                                                        ...prev[product.id],
                                                                        [group.name]: index
                                                                    }
                                                                }))
                                                            }
                                                            className={`px-3 py-1 rounded-full text-sm border transition
                    ${selectedIndex === index
                                                                    ? "bg-orange-500 text-white"
                                                                    : "bg-white hover:bg-gray-200"
                                                                }`}
                                                        >
                                                            {opt.label}
                                                        </button>
                                                    ))}
                                                </div>

                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* 🔢 QUANTIDADE */}
                            <div className="flex justify-center items-center gap-4 mt-3">

                                <button
                                    onClick={() => decrease(product.id)}
                                    className="bg-gray-200 w-8 h-8 rounded-full hover:bg-gray-300"
                                >
                                    -
                                </button>

                                <span className="text-lg font-bold">
                                    {qty}
                                </span>

                                <button
                                    onClick={() => increase(product.id)}
                                    className="bg-gray-200 w-8 h-8 rounded-full hover:bg-gray-300"
                                >
                                    +
                                </button>

                            </div>

                            {/* 🛒 BOTÃO */}
                            <button
                                onClick={() => {

                                    const selected = product.optionGroups?.map(group => {
                                        const index =
                                            selectedOptions[product.id]?.[group.name] ??
                                            getDefaultIndex(group.options);

                                        return {
                                            group: group.name,
                                            value: group.options[index].label
                                        };
                                    });

                                    addToCart(
                                        {
                                            ...product,
                                            price,
                                            selectedOptions: selected
                                        },
                                        qty
                                    );
                                }}
                                className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-2 rounded-full mt-4 transition"
                            >
                                Encomendar
                            </button>

                        </div>
                    );

                })}

            </div>

        </section>
    );
}