import { createContext, useContext, useState, ReactNode } from "react";

export type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    step?: number; // 👈 Adicionado
    min?: number;  // 👈 Adicionado
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
                    (p.id === product.id && JSON.stringify(p.selectedOptions) === JSON.stringify(product.selectedOptions))
                        ? { ...p, quantity: p.quantity + quantity }
                        : p
                );
            }

            return [...prev, { ...product, quantity }];
        });
    };

    const increase = (id: number) => {
        setCart(prev =>
            prev.map(p => {
                if (p.id === id) {
                    const step = p.step || 1; // 👈 Usa o step do produto ou 1
                    return { ...p, quantity: p.quantity + step };
                }
                return p;
            })
        );
    };

    const decrease = (id: number) => {
        setCart(prev =>
            prev
                .map(p => {
                    if (p.id === id) {
                        const step = p.step || 1;
                        const min = p.min || 1;
                        // Se a quantidade atual for igual ao mínimo, 
                        // retornamos 0 para o filter remover do carrinho
                        if (p.quantity <= min) return { ...p, quantity: 0 };

                        return { ...p, quantity: p.quantity - step };
                    }
                    return p;
                })
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