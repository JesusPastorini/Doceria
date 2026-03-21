import imgQualidade from '../assets/ovocoracao2.png'
//import imgBolo from '../assets/marmita2.jpeg'
import imgCorte from '../assets/especial2.png'
//import imgTexto from '../assets/iFood1.jpeg'

const SpecialAndIfood: React.FC = () => {
    return (
        <section className="container mx-auto my-16 px-2 md:px-0">

            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden">

                {/* TEXTO QUALIDADE */}
                <div className="bg-[#cdb49e] flex flex-col justify-center items-center p-10 text-center">
                    <h2 className="text-white text-4xl font-bold">
                        Qualidade
                    </h2>

                    <span className="text-yellow-300 text-5xl italic">
                        E Doçura
                    </span>
                </div>

                {/* IMAGEM BOLO */}
                <div>
                    <img src={imgQualidade} alt="Bolo" className="w-full h-full object-cover" />
                </div>

                {/* IMAGEM CORTE */}
                <div>
                    <img src={imgCorte} alt="Bolo Corte" className="w-full h-full object-cover" />
                </div>

                {/* TEXTO PRODUÇÃO */}
                <div className="bg-[#9bb8c1] flex flex-col justify-center items-center text-center p-10">

                    <p className="text-white text-lg mb-6">
                        Produção em grande escala mantendo a qualidade artesanal!
                    </p>

                    <button className="bg-[#d9bca6] px-6 py-2 rounded-full font-semibold hover:opacity-90">
                        SAIBA MAIS →
                    </button>

                </div>

            </div>

        </section>
    )
}

export default SpecialAndIfood
