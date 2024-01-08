import CatShop from "../../../assets/cat-shop.jpg"
import DogShop from "../../../assets/dog-shop.jpg"
import RabbitShop from "../../../assets/rabbit-shop.jpg"
import FishShop from "../../../assets/fish-shop.jpg"
import BirdShop from "../../../assets/bird-shop.jpg"
import MedicineShop from "../../../assets/medicine-shop.jpg";

const Shop = () => {
    return (
        <div className="my-10  ">

         <div className="flex mx-5 gap-5">
            <img className=" w-[400px] rounded-xl transform scale-x-[-1]" src={CatShop} alt="" />
            <img className=" w-[400px] rounded-xl" src={DogShop} alt="" />
            <img className=" w-[400px] rounded-xl" src={RabbitShop} alt="" />
         </div>

          <div className="flex mx-5 gap-5 pt-5">
            <img className=" w-[400px] rounded-xl transform scale-x-[-1]" src={BirdShop} alt="" />
            <img className=" w-[400px] rounded-xl" src={FishShop} alt="" />
            <img className=" w-[400px] rounded-xl" src={MedicineShop} alt="" />
          </div>

            
        </div>
    );
};

export default Shop;