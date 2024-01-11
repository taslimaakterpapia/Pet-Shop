import { Link } from "react-router-dom";
import icon from "../../../assets/icon.png";


const Footer = () => {
    return (
        <footer className="my-10">
                 <hr className="border-0 bg-green-500 h-1" />
            <div className="md:grid grid-cols-4  pt-5 gap-10 mx-10 md:mx-0">


                <div>
                    <img className="" src={icon} alt="" />

                    <p className="text-justify  ">Pet Shop is an online  pet shop in Dhaka providing  your loving pets with their favorite foods and other accessories. We home deliver your pet food so you  can receive from your doorstep.</p>
                </div>

                <div className="lg:ml-28">
                    <h1 className="text-xl font-bold text-orange-400 py-5 ">CATEGORIES</h1>

                    <Link className="hover:text-green-600">Cat</Link> <br />
                    <Link className="hover:text-green-600"> Dog</Link> <br />
                    <Link className="hover:text-green-600" >Fish</Link> <br />
                    <Link className="hover:text-green-600">Rabbit</Link> <br />
                    <Link className="hover:text-green-600">Bird</Link>

                </div>


                <div className="lg:ml-20">
                    <h1 className="text-xl font-bold text-orange-400 py-5">QUICK LINKS</h1>
                    <Link className="hover:text-green-600">Home</Link> <br />
                    <Link className="hover:text-green-600">Blog</Link>  <br />
                    <Link className="hover:text-green-600">Contact</Link>

                </div>


                <div className="lg:ml-16">
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