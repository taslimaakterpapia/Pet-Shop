import Ball from "../../../assets/ball.png"
import Food from "../../../assets/food.png"
import Treat from "../../../assets/treat.png"
import Injection from "../../../assets/injection.png"

const Info = () => {
    return (
        <div className="flex mt-10 py-10 gap-12 ">
            

        <div className="flex gap-3 items-center justify-center">
            <img className="hover:bg-green-400 p-5 rounded-xl" src={Ball} alt="" />
            <div>
                <h1 className="text-xl font-semibold text-orange-400 font-salsa ">Pet Toys</h1>
                <p className="text-gray-400">Durable toy consisting of three levels of exciting play, Great fun for your pets.</p>
            </div>
        </div>


        <div className="flex gap-3 items-center justify-center ">
            <img className="hover:bg-green-400 p-5 rounded-xl" src={Food} alt="" />
            <div>
                <h1 className="text-xl font-semibold text-orange-400 font-salsa ">Pet Food</h1>
                <p className="text-gray-400  ">Feed your growing explorer an ultra-high protein diet to fuel his adventures.</p>
            </div>
        </div>



        <div className="flex gap-3 items-center justify-center ">
            <img className="hover:bg-green-400 p-5 rounded-xl" src={Treat} alt="" />
            <div>
                <h1 className="text-xl font-semibold text-orange-400 font-salsa "> Pet Treats</h1>
                <p className="text-gray-400  ">Zero grains, gluten, wheat, corn, soy, potatoes, poultry by-product meals.</p>
            </div>
        </div>


        <div className="flex gap-3 items-center justify-center ">
            <img className="hover:bg-green-400 p-5 rounded-xl" src={Injection} alt="" />
            <div>
                <h1 className="text-xl font-semibold text-orange-400 font-salsa ">Pet Pharmacy</h1>
                <p className="text-gray-400  ">Prevent heartworm disease by eliminating the tissue stage of heartworm larvae. </p>
            </div>
        </div>


        </div>
    );
};

export default Info;