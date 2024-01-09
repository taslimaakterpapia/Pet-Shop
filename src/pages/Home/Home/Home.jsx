import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Info from "../Info/Info";
import PopularProduct from "../PopularProduct/PopularProduct";
import Shop from "../shop/Shop";



const Home = () => {
    return (
        <div className="mt-5">
        <Banner></Banner>
        <Info></Info>
        <Shop></Shop>
        <PopularProduct></PopularProduct>
        <Brand></Brand>

        </div>
    );
};

export default Home;