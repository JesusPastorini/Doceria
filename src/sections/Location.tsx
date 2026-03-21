const Location: React.FC = () => {
    return (
        <section id="location" className="my-32 bg-white bg-amber-100">
            <h2 className="text-4xl font-bold text-center mb-4">Localização</h2>
            <p className="mb-4 text-center">Serraria Queimada, Linha Santa Isabel - Interior, Santo Antônio do Sudoeste</p>
            <div className="w-full h-96">
                <iframe
                    title="Localização da doceria"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d447.9932211223245!2d-53.720114789050655!3d-26.068028689575648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1773946086312!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}

export default Location;
