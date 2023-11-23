function ProductArticle(props) {

    let bestSeller = props.productBestSell === 'seller' ? 'Best Seller' : props.productBestSell === 'new' ? 'New Collection' : '';
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