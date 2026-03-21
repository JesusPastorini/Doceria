import { motion, Variants } from 'framer-motion';
import boloMorango from '../assets/venda3.png';
import boloChocolate from '../assets/venda2.png';
import doces from '../assets/venda5.png';

export const AnimatedCakes: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            y: -200,
            opacity: 0,
            rotate: -8,
            scale: 0.9,
        },
        visible: {
            y: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12,
            },
        },
    };

    const cakes = [
        { id: 1, src: boloMorango, alt: 'Bolo de Morango', bgColor: 'bg-pink-100' },
        { id: 2, src: boloChocolate, alt: 'Bolo de Chocolate', bgColor: 'bg-amber-100' },
        { id: 3, src: doces, alt: 'Doces Finos', bgColor: 'bg-orange-100' },
    ];

    return (
        <section className="pt-36 md:pt-24 pb-20 bg-[#ADD8E6] overflow-hidden relative">
            <motion.div
                className="container mx-auto px-2 md:px-4 flex flex-col md:flex-row items-center md:items-start"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* 1. CONTAINER DAS IMAGENS LADO A LADO */}
                <div className="flex md:order-2 flex-row justify-center md:justify-end items-center gap-2 md:gap-4 w-full [perspective:3500px]">
                    {cakes.map((cake) => (
                        <motion.div
                            key={cake.id}
                            variants={itemVariants}
                            className={`relative w-[38%] md:w-[18%] md:w-1/4 max-w-md ${cake.bgColor} 
                                rounded-b-[60px] md:rounded-b-[190px] 
                                border-[4px] md:border-[6px] border-orange-400 
                                overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.25)] md:shadow-[0_40px_80px_rgba(0,0,0,0.35)] z-10
                                transition-all duration-500`}
                                whileTap={{ scale: 0.96 }}
                            whileHover={{
                                scale: 1.08,
                                rotateY: 8,
                                rotateX: 5,
                            }}
                            style={{
                                transformStyle: "preserve-3d"
                            }}
                        >
                            {/* Chocolate escorrendo (Desktop) */}
                            <motion.svg
                                viewBox="0 0 500 80"
                                className="absolute top-0 left-0 w-full z-20 hidden md:block"
                                preserveAspectRatio="none"
                                initial={{ y: -40 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                            >
                                <path fill="#4a250a" d="M0,0 L500,0 L500,30 C450,70 420,20 380,60 C340,100 300,30 250,70 C200,100 150,30 120,70 C80,100 50,20 0,50 Z" />
                            </motion.svg>

                            <div className="relative pt-[300%] md:pt-[240%]">
                                <div className="absolute inset-0 shadow-inner shadow-black/20 rounded-b-[60px] md:rounded-b-[100px]"></div>
                                <img   
                                    src={cake.src}
                                    alt={cake.alt}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 2. CONTEÚDO DE TEXTO ABAIXO */}
                <div className="mt-5 md:order-1 md:mt-0 md:-mt-24 text-center md:text-left flex flex-col items-center md:items-start gap-4 md:gap-6 z-10">
                    <h2 className="text-white text-3xl md:text-6xl font-black uppercase leading-[1.1] tracking-tight italic">
                        Onde tem <br /> felicidade, tem
                    </h2>

                    {/* Estilo cursivo para o nome */}
                    <span className="text-orange-500 text-6xl md:text-6xl lowercase select-none"
                        style={{ fontFamily: 'Pacifico, cursive', textShadow: '2px 2px 0px rgba(255,255,255,0.3)' }}>
                       Delicias da Cris
                    </span>

                    {/* Botão estilo e-commerce */}
                    <a href="#ecomerce">
                    <button className="mt-4 md:mt-6 bg-[#FFF9E5] text-orange-600 font-bold py-3 px-6 md:px-10 rounded-full flex items-center gap-2 shadow-lg hover:bg-white hover:scale-105 transition-all uppercase text-xs md:text-lg">
                        Conheça nosso e-commerce
                        <span className="text-xl font-bold">→</span>
                        </button>
                    </a>
                </div>

                {/* 3. DETALHES DECORATIVOS (RISCOS AMARELOS) */}
                <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
                    {/* Aqui simulamos os riscos com um padrão simples de repetição ou imagem de fundo */}
                    <div className="w-full h-full bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:20px_20px] md:[background-size:40px_40px]"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default AnimatedCakes;