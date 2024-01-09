import CatShop from "../../../assets/cat-shop.jpg"
import DogShop from "../../../assets/dog-shop.jpg"
import RabbitShop from "../../../assets/rabbit-shop.jpg"
import FishShop from "../../../assets/fish-shop.jpg"
import BirdShop from "../../../assets/bird-shop.jpg"
import MedicineShop from "../../../assets/medicine-shop.jpg";

const Shop = () => {
    return (
        <div className="my-10  ">

         <div className="md:flex gap-20">

            <div className="pb-10 md:pb-0">            
            <img className="absolute h-[230px] w-[400px] rounded-xl transform  scale-x-[-1]" src={CatShop} alt="" />
            
            <div className="relative items-center pl-56 pt-12 ">
                <h1 className="text-orange-700 font-semibold text-xl">Cat</h1>
                <p className="text-gray-500">Food, Litters & Toys</p>
                <button className="bg-orange-700 text-white font-semibold rounded-xl p-4 mt-10">Shop Now</button>
            </div>
            </div>




            <div className="pb-10 md:pb-0 ">            
            <img className="absolute h-[230px] w-[400px] rounded-xl" src={DogShop} alt="" />
            
            <div className="relative items-center pl-56 pt-12">
                <h1 className="text-orange-700 font-semibold text-xl">Dog</h1>
                <p className="text-gray-500">Food, Bowls & Toys</p>
                <button className="bg-orange-700 text-white font-semibold rounded-xl p-4 mt-10">Shop Now</button>
            </div>
            </div>




            <div className="pb-10 md:pb-0 ">            
            <img className="absolute h-[230px] w-[400px] rounded-xl" src={RabbitShop} alt="" />
            <div className="relative items-center pl-56 pt-12">
                <h1 className="text-orange-700 font-semibold text-xl">Rabbits</h1>
                <p className="text-gray-500">Food,feeders & Toys</p>
                <button className="bg-orange-700 text-white font-semibold rounded-xl p-4 mt-10">Shop Now</button>
            </div>
            </div>

        
            
         </div>



         

          <div className="md:flex  gap-20 md:my-16">



          <div className="pb-10 md:pb-0 ">
            
          <img className="absolute h-[230px] w-[400px] rounded-xl transform scale-x-[-1]" src={BirdShop} alt="" />
         
          <div className="relative items-center pl-56 pt-12">
                <h1 className="text-orange-700 font-semibold text-xl">Bird</h1>
                <p className="text-gray-500">Food,feeders & Toys</p>
                <button className="bg-orange-700 text-white font-semibold rounded-xl p-4 mt-10">Shop Now</button>
            </div>
            </div>


          <div className="pb-10 md:pb-0 ">
            
          <img className="absolute h-[230px] w-[400px] rounded-xl" src={FishShop} alt="" />
         
          <div className="relative items-center pl-56 pt-12">
                <h1 className="text-orange-700 font-semibold text-xl">Fish</h1>
                <p className="text-gray-500">Food, Bowls & Toys</p>
                <button className="bg-orange-700 text-white font-semibold rounded-xl p-4 mt-10">Shop Now</button>
            </div>
            </div>



          <div className="pb-10 md:pb-0 ">
            
          <img className="absolute h-[230px] w-[400px] rounded-xl" src={MedicineShop} alt="" />
         
          <div className="relative items-center pl-56 pt-12">
                <h1 className="text-orange-700 font-semibold text-xl">Medicine</h1>
                <p className="text-gray-500">Pet Health Care</p>
                <button className="bg-orange-700 text-white font-semibold rounded-xl p-4 mt-10">Shop Now</button>
            </div>
            </div>

      
            
            
          </div>

            
        </div>
    );
};

export default Shop;