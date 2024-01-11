
import img23 from "../../../assets/img23.jpg"
import img24 from "../../../assets/img24.jpg"
import img25 from "../../../assets/img25.jpg"
import img26 from "../../../assets/img26.jpg"

const About = () => {
    return (
        <div className="my-10 mx-10 md:mx-0">

            <h1 className="text-3xl text-orange-400 font-bold text-center justify-center underline underline-offset-4">Why Pet Shop?</h1>

           

               
                    <div>
                        <p className="md:flex flex-wrap text-center justify-center pt-5 md:px-32">Until one has loved an animal, a part of one’s soul remains unawakened. 

                        We believe in it and we believe in easy access to things that are good for our mind, body and spirit.

                        With a clever offering, superb support and a secure checkout you’re in good hands.</p>
                    </div>

                    <div className="md:flex flex-wrap pt-5 gap-3 items-center justify-center">
                        <img className="w-[310px] pb-2" src={img23} alt="" />
                        <img className="w-[310px] pb-2" src={img24} alt="" />
                        <img className="w-[310px] pb-2"src={img25} alt="" />
                        <img className="w-[310px] pb-2" src={img26} alt="" />
                    </div>
                </div>

                
          




       
    );
};

export default About;