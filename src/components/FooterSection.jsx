

function FooterSection({img, title, paragraph, children}) {
    return (
        <section>
            {children}
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </section>
    )

}

export default FooterSection;