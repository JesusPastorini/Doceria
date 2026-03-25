import { FaFacebook, FaInstagram, FaWhatsapp, FaCode } from 'react-icons/fa';
import logo from '../assets/Logo2.png';
import devLogo from '../assets/LogoJP.png';

const Footer: React.FC = () => {
    return (
        <div id="faleconosco" className="bg-[#cdb49e]">
            <div className="mx-6 md:mx-14 mt-14">
                <footer className="footer flex flex-col md:flex-row 
justify-between items-center md:items-start 
text-center md:text-left
md:gap-16">

                    {/* Logo */}
                    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/3">
                        <img
                            src={logo}
                            alt="Restaurante Logo"
                            width={500}
                            height={600}
                            className="mb-8 max-w-xs md:max-w-full"
                        />
                    </div>

                    {/* Contato */}
                    <div className="flex flex-col items-center md:items-center mb-8 md:w-1/3">
                        <h3 className="text-lg font-serif font-bold text-white">
                            Fale Conosco
                        </h3>

                        {/* Redes sociais */}
                        <div className="flex space-x-6 mt-4 mb-8">

                            {/* Facebook */}
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transform transition duration-300 md:hover:scale-125"
                            >
                                <FaFacebook size={34} className="text-blue-600" />
                            </a>

                            {/* WhatsApp (destacado) */}
                            <a
                                href="https://api.whatsapp.com/send?phone=%2B5546999806621"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 p-2 rounded-full shadow-lg 
                                transform transition duration-300 
                                md:hover:scale-125 
                                animate-pulse md:animate-none"
                            >
                                <FaWhatsapp size={34} className="text-white" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/deliciasdacris529/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transform transition duration-300 md:hover:scale-125"
                            >
                                <FaInstagram size={34} className="text-pink-500" />
                            </a>

                        </div>
                    </div>

                    {/* Horários */}
                    <div className="mb-8 md:mb-0 text-white font-serif font-bold flex flex-col items-center md:items-start md:w-1/3">
                        <h3 className="text-lg font-bold">Horários de Funcionamento</h3>
                        <p>Seg a Sab: 24 H</p>

                        <br />

                        <p>Entregas sob encomenda • Consulte disponibilidade</p>

                        <br />

                        <a
                            href="https://portifolio-mu-one-58.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 flex flex-col items-center gap-3 group"
                        >
                            {/* 🔥 BADGE TOP */}
                            <div className="
        flex items-center gap-3 
        px-5 py-2 
        rounded-full 
        bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500
        text-white font-semibold text-sm
        shadow-xl
        animate-pulse
        group-hover:scale-110
        transition duration-300
    ">
                                <FaCode className="text-white text-lg" />
                                Desenvolvido por
                            </div>

                            {/* 💻 LOGO COM GLOW */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-40 rounded-full animate-pulse"></div>

                                <img
                                    src={devLogo}
                                    alt="Logo Desenvolvedor"
                                    className="relative h-14 transition duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* ✨ FRASE EXTRA (OPCIONAL, mas MUITO forte) */}
                            <span className="text-xs text-white/80 group-hover:text-white transition">
                                Sites modernos • rápidos • responsivos
                            </span>
                        </a>
                    </div>
                </footer>
            <p className="text-center text-black pb-6">
                © 2026 Delicias da Cris. Todos os direitos reservados.
            </p>
            </div>
        </div>
    );
};

export default Footer;