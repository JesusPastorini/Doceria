import bolo1 from "../assets/Bolo3.png";
import bolo2 from "../assets/ovoTradicionalComum.png";
import coracao from "../assets/ovoCoracao.png";
import infantil from "../assets/ovoInfantil.png";
import docinhos2 from "../assets/docinhos2.png";
import trufados from "../assets/ovoTrufado.png";

// 🔥 TIPOS
export type ProductOption = {
    label: string;
    price?: number;
    default?: boolean;
};

export type OptionGroup = {
    name: string;
    options: ProductOption[];
    type?: "select" | "display";
};

export type Product = {
    id: number;
    name: string;
    price?: number;
    image: string;
    step?: number;
    min?: number;
    optionGroups?: OptionGroup[];
};

// 🔥 LISTA DE PRODUTOS
export const products: Product[] = [
    {
        id: 1,
        name: "Bolo de Morango",
        price: 180,
        image: bolo1
    },
    {
        id: 2,
        name: "Ovo de Colher Tradicional",
        image: bolo2,
        optionGroups: [
            {
                name: "Tamanho",
                options: [
                    { label: "150g", price: 20, default: true },
                    { label: "250g", price: 35 },
                    { label: "350g", price: 50 },
                    { label: "500g", price: 70 }
                ]
            },
            {
                name: "Recheio Tradicionais",
                options: [
                    { label: "Brigadeiro", default: true },
                    { label: "Beijinho" },
                    { label: "Prestígio" },
                    { label: "Dois Amores" }                   
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Ovo Coração",
        image: coracao,
        optionGroups: [
            {
                name: "Tamanho",
                options: [
                    { label: "500g", price: 80, default: true }
                ]
            },
            {
                name: "Recheio Gourmet",
                options: [
                    { label: "Ferrero Rocher", default: true },
                    { label: "Kinder Bueno" },
                    { label: "Ninho Com Nutela" },
                    { label: "Creme de Avelã" },
                    { label: "Ouro Branco" },
                    { label: "Oreo" }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Ovos Trufados",
        image: trufados,
        optionGroups: [
            {
                name: "Tamanho",
                options: [
                    { label: "350g", price: 50, default: true },
                    { label: "500g", price: 70 }
                ]
            },
            {
                name: "Recheio Tradicionais",
                options: [
                    { label: "Brigadeiro", default: true },
                    { label: "Beijinho" },
                    { label: "Prestígio" },
                    { label: "Dois Amores" }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Ovos Infantis",
        image: infantil,
        optionGroups: [
            {
                name: "Tamanho",
                options: [
                    { label: "250g", price: 40, default: true },
                    { label: "350g", price: 50 },
                    { label: "500g", price: 70 }
                ]
            },
            {
                name: "Recheio",
                options: [
                    { label: "Brigadeiro", default: true },
                ]
            },
            {
                name: "Finalização",
                type: "display", // 👈 AQUI
                options: [
                    { label: "Confetes" },
                    { label: "Marshmallow" },
                    { label: "Goma" },
                    { label: "Tortuguita" }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Brigadeiros Gourmet",
        price: 2,
        image: docinhos2,
        step: 100, // 👈 Pula de 100 em 100
        min: 100,   // 👈 Mínimo de 100
        optionGroups: [
            {
                name: "Escolha o Topping (Adicional)",
                type: "display",
                options: [
                    { label: "Confetes" },
                    { label: "Granulado Colorido" },
                    { label: "Coco Ralado" },
                    { label: "Ouro em Pó (Gourmet)" },
                    { label: "Pedacinhos de Paçoca" }
                ]
            }
        ]
    }
];