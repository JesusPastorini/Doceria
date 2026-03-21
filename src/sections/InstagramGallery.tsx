import insta1 from '../assets/insta1.png'
import insta2 from '../assets/insta2.png'
import insta3 from '../assets/insta3.png'
import insta4 from '../assets/insta4.png'
import insta5 from '../assets/insta5.png'
import insta6 from '../assets/insta6.png'

const InstagramGallery: React.FC = () => {

    const images = [insta1, insta2, insta3, insta4, insta5, insta6]

    return (
        <section id="galeria" className="bg-[#e8dfbf] py-16 px-4">

            <div className="container mx-auto text-center">

                {/* Titulo */}
                <h2 className="text-3xl font-bold text-orange-600 mb-10">
                    Siga-nos no Instagram
                </h2>

                {/* Galeria */}
                <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-10">

                    {images.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-xl">

                            <img
                                src={img}
                                alt="Instagram"
                                className="w-full h-32 object-cover hover:scale-110 transition duration-300"
                            />

                        </div>
                    ))}

                </div>

                {/* Botão */}
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">

                        INSTAGRAM →

                    </button>
                </a>

            </div>

        </section>
    )
}

export default InstagramGallery
