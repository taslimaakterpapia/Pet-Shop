import kitty from "../../../assets/kitty.png";
import dog from "../../../assets/dog.png";
import parrot from "../../../assets/parrot.png";
import fish from "../../../assets/fish.png";
import rabbit from "../../../assets/rabbit.png";
import pills from "../../../assets/pills.png";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className=" flex justify-between text-lg items-center  mt-8 bg-green-400 text-orange-700 font-semibold px-3 py-2 rounded-lg ">
            
            <ul to='/cat' className="menu lg:menu-horizontal  hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg ">
            <li className="relative">
                    <details  >
                        <summary><img className="items-center justify-items-center" src={kitty} alt="" />Cat</summary>
                        <ul className="bg-orange-400  hover:text-orange-700 ">
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Food</Link></li>
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Accessories</Link></li>
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Medicine</Link></li>

                        </ul>
                    </details>
                </li>
            </ul>
            
            <ul to='/dog' className="menu lg:menu-horizontal  hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg ">
            <li className="relative">
                    <details >
                        <summary><img src={dog} alt="" />Dog</summary>
                        <ul className="bg-orange-400  hover:text-orange-700 ">
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Food</Link></li>
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Accessories</Link></li>
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Medicine</Link></li>

                        </ul>
                    </details>
                </li>
            </ul>
            
            <ul to='/bird' className="menu lg:menu-horizontal  hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg">
            
            <li className="relative">
                    <details >
                        <summary><img src={parrot} alt="" />Bird</summary>
                        <ul className="bg-orange-400  hover:text-orange-700 ">
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Food</Link></li>
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Accessories</Link></li>
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Medicine</Link></li>

                        </ul>
                    </details>
                </li>
            </ul>
           
           
           
            <ul to='/fish' className="menu lg:menu-horizontal hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg">
            
            <li className="relative">
                    <details >
                        <summary><img src={fish} alt="" />Fish</summary>
                        <ul className="bg-orange-400  hover:text-orange-700 ">
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Food</Link></li>
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Accessories</Link></li>
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Medicine</Link></li>

                        </ul>
                    </details>
                </li>
            
            
            </ul>




            <ul to='/catfood' className=" menu lg:menu-horizontal hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg">

                <li className="relative">
                    <details >
                        <summary><img src={rabbit} alt="" />
                        Rabbits</summary>
                        <ul className="bg-orange-400  hover:text-orange-700 ">
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Food</Link></li>
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Accessories</Link></li>
                            <li className=" text-green-700 hover:text-orange-700 "><Link>Medicine</Link></li>

                        </ul>
                    </details>
                </li>

            </ul>




            <ul className="menu lg:menu-horizontal hover:border-2 border-orange-600 hover:text-green-700 hover:font-semibold px-3 py-2 rounded-lg ">

                <li className="relative">
                    <details  >
                        <summary><img src={pills} alt="" />
                            Medicine</summary>
                        <ul className="bg-orange-400 ">
                            <li className=" text-green-700 hover:text-orange-700 "><a>Cat Medicine</a></li>
                            <li className=" text-green-700 hover:text-orange-700 "><a>Dog medicine</a></li>
                            <li className=" text-green-700 hover:text-orange-700 "><a>Bird medicine</a></li>
                            <li className=" text-green-700 hover:text-orange-700 "><a>Fish medicine</a></li>   
                            <li className=" text-green-700 hover:text-orange-700 "><a>Rabbit medicine</a></li>   

                        </ul>
                    </details>
                </li>

            </ul>




        </div>
    );
};

export default Category;