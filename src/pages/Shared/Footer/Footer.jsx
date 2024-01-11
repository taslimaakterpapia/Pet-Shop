import { Link } from "react-router-dom";
import icon from "../../../assets/icon.png";


const Footer = () => {
    return (
        <footer className="my-10">
                 <hr className="border-0 bg-green-500 h-1" />
            <div className="flex flex-col-4 pt-5 justify-between">


                <div>
                    <img className="w-[200px] " src={icon} alt="" />

                    <p>Pet Shop is an online pet shop in Dhaka providing <br /> your loving pets with their favorite foods and other <br /> accessories. We home deliver your pet food so you <br /> can receive from your doorstep.</p>
                </div>

                <div>
                    <h1 className="text-xl font-bold text-orange-400 py-5 ">CATEGORIES</h1>

                    <Link className="hover:text-green-600">Cat</Link> <br />
                    <Link className="hover:text-green-600"> Dog</Link> <br />
                    <Link className="hover:text-green-600" >Fish</Link> <br />
                    <Link className="hover:text-green-600">Rabbit</Link> <br />
                    <Link className="hover:text-green-600">Bird</Link>

                </div>


                <div>
                    <h1 className="text-xl font-bold text-orange-400 py-5">QUICK LINKS</h1>
                    <Link className="hover:text-green-600">Home</Link> <br />
                    <Link className="hover:text-green-600">Blog</Link>  <br />
                    <Link className="hover:text-green-600">Contact</Link>

                </div>


                <div>
                <h1 className="text-xl font-bold text-orange-400 py-5 ">CONTACT</h1>
                    <p><span className=" font-bold text-orange-400 ">Address:</span> Dhaka, Bangladesh.  </p>
                    <p><span className=" font-bold text-orange-400 ">Phone Number:</span> 000000000  </p>
                    <p><span className=" font-bold text-orange-400 ">Email:</span> petshop@gmail.com  </p>
                   
                </div>

            </div>




        </footer>
    );
};
export default Footer;