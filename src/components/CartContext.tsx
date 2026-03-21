import { createContext, useContext, useState, ReactNode } from "react";

export type Product = {
    id: number;
    name: string;
    image: string;
    price: number;

    // 🔥 nova propriedade opcional
    selectedOptions?: {
        group: string;
        value: string;
    }[];
};

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    increase: (id: number) => void;
    decrease: (id: number) => void;
    total: number;
}

const CartContext = createContext<CartContextType | null>(null);

interface Props {
    children: ReactNode;
}

export const CartProvider = ({ children }: Props) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product, quantity: number) => {

        setCart(prev => {

            const exist = prev.find(p =>
                p.id === product.id &&
                JSON.stringify(p.selectedOptions) === JSON.stringify(product.selectedOptions)
            );

            if (exist) {
                return prev.map(p =>
                    p.id === product.id
                        ? { ...p, quantity: p.quantity + quantity }
                        : p
                );
            }

            return [...prev, { ...product, quantity }];
        });

    };

    const increase = (id: number) => {
        setCart(prev =>
            prev.map(p =>
                p.id === id ? { ...p, quantity: p.quantity + 1 } : p
            )
        );
    };

    const decrease = (id: number) => {
        setCart(prev =>
            prev
                .map(p =>
                    p.id === id ? { ...p, quantity: p.quantity - 1 } : p
                )
                .filter(p => p.quantity > 0)
        );
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider value={{ cart, addToCart, increase, decrease, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext)!;