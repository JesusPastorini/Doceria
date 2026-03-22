const Location: React.FC = () => {
    return (
        <section id="location" className="my-32 bg-white bg-amber-100">
            <h2 className="text-4xl font-bold text-center mb-4">Localização</h2>
            <p className="mb-4 text-center">Serraria Queimada, Linha Santa Isabel - Interior, Santo Antônio do Sudoeste</p>
            <div className="w-full h-96">
                <iframe
                    title="Localização da doceria"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28671.246044242584!2d-53.72863293318739!3d-26.069336268026262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f0eb35c7316fc9%3A0x445665c0f0eb7217!2sDelicias%20da%20Cris!5e0!3m2!1spt-BR!2sbr!4v1774146320545!5m2!1spt-BR!2sbr"
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
