import kitty from "../../../assets/kitty.png";
import dog from "../../../assets/dog.png";
import parrot from "../../../assets/parrot.png";
import fish from "../../../assets/fish.png";
import catfood from "../../../assets/catfood.png";
import pills from "../../../assets/pills.png";

const Category = () => {
    return (
        <div className=" flex justify-between text-lg items-center mx-10 mt-8">
            <a className="text-center" href=""><img src={kitty}alt="" />Cat</a>
            <a href=""><img src={dog}alt="" />Dog</a>
            <a href=""><img src={parrot}alt="" />Bird</a>
            <a href=""><img src={fish}alt="" />Fish</a>
            <a href=""><img src={catfood}alt="" />Cat Food</a>
            <a href=""><img src={pills}alt="" />Medicine</a>
        </div>
    );
};

export default Category;