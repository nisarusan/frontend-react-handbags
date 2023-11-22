function ProductArticle(props) {

    let bestSeller = '';
    if (props.productBestSell === "seller") {
        bestSeller = "Best Seller";
    } else if (props.productBestSell === "new") {
        bestSeller = 'New Collection';
    }
    return (
        <>
            <main>
                <article>
                    <span>{bestSeller}</span>
                    <img src={props.productImg} alt="bags"/>
                    <p>{props.productTitle}</p>
                    <h4>€{props.productPrice}</h4></article>
            </main>
        </>
    )
}

export default ProductArticle;