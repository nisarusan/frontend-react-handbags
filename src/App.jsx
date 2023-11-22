import './App.css'
import ButtonNav from "./assets/header/buttons/ButtonNav.jsx";
import ProductArticle from "./assets/components/ProductArticle.jsx";
import bagImage_1 from "./assets/bag_1.png";
import bagImage_2 from "./assets/bag_2.png";
import bagImage_3 from "./assets/bag_3.png";
import bagImage_4 from "./assets/bag_4.png";
import ourStory from "./assets/our_story.png";
import ourBrand from "./assets/brand.png";
import FooterSection from "./assets/components/FooterSection.jsx";

function App() {
    return (
        <>

        <h1>Handbags & Purses</h1>
        <nav>
            <ButtonNav onClick={() => {
                console.log("to the collection")
            }} buttonTitle="to the collection"/>
            <ButtonNav buttonTitle="shop all bags"/>
            <ButtonNav buttonTitle="pre-orders" disabled="true"/>
        </nav>
        <main>
            <ProductArticle
                productTitle="The Handy Bag"
                productImg={bagImage_1}
                productBestSell="seller"
                productPrice="400"
            />
            <ProductArticle
                productTitle="The Stylish Bag"
                productImg={bagImage_2}
                productBestSell="seller"
                productPrice="250"
            />
            <ProductArticle
                productTitle="The simple Bag"
                productImg={bagImage_3}
                productBestSell="new"
                productPrice="300"
            />
            <ProductArticle
                productTitle="The trendy bag"
                productImg={bagImage_4}
                productBestSell="new"
                productPrice="150"
            />
        </main>
        <footer>
            <FooterSection
                title="The Brand"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum"
            />
            <FooterSection
                title="The Brand"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum"

            />


        <section>
            <img src={ourBrand} alt=""/>
        </section>
        <section>
            <img src={ourStory} alt=""/>
        </section>
        <section>
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum</p>
        </section>
        </footer>
</>
)
}

export default App
