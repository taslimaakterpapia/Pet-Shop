import kitty from "../../../assets/kitty.png";
import dog from "../../../assets/dog.png";
import parrot from "../../../assets/parrot.png";
import fish from "../../../assets/fish.png";
import catfood from "../../../assets/catfood.png";
import pills from "../../../assets/pills.png";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className=" flex justify-between text-lg items-center  mt-8 bg-green-400 text-orange-700 font-semibold px-3 py-2 rounded-lg ">
            <Link to='/cat' className="hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg "><img className="items-center justify-items-center" src={kitty}alt="" />Cat</Link>
            <Link to='/dog' className="hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg "><img src={dog}alt="" />Dog</Link>
            <Link to='/bird' className="hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg"><img src={parrot}alt="" />Bird</Link>
            <Link to='/fish' className="hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg"><img src={fish}alt="" />Fish</Link>
            <Link to='/catfood' className="hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg"><img src={catfood}alt="" />Cat Food</Link>
            <Link to='/medicine' className="hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg"><img src={pills}alt="" />Medicine</Link>
        </div>
    );
};

export default Category;