import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Shop from "../shop/Shop";



const Home = () => {
    return (
        <div className="mt-5">
        <Banner></Banner>
        <Info></Info>
        <Shop></Shop>
        </div>
    );
};

export default Home;