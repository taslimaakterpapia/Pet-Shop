import img3 from "../../../../assets/img3.jpg"
import img2 from "../../../../assets/img2.jpg"
import img1 from "../../../../assets/img1.jpg"
import img4 from "../../../../assets/img4.jpg"
import img5 from "../../../../assets/img5.jpg"
import img8 from "../../../../assets/img8.webp"
import img9 from "../../../../assets/img9.jpg"
import img10 from "../../../../assets/img10.webp"
import img11 from "../../../../assets/img11.jpg"

const Banner = () => {
    return (
        <div>
            <div className="md:flex  gap-3 mb-5 ">
                <img  className="rounded-lg w-[580px]" src={img3} alt="" />
                <div className="md:grid grid-cols-2 gap-3 ">
                    <img className="rounded-lg" src={img2} alt="" />
                    <img className="rounded-lg" src={img1} alt="" />
                    <img className="rounded-lg" src={img4} alt="" />
                    <img className="rounded-lg" src={img5} alt="" />

                </div>
            </div>

            <div className="md:flex w-[305px]  justify-between mb-5 gap-5">
            <img className="rounded-lg " src={img8} alt="" />
            <img  className="rounded-lg " src={img9} alt="" />
            <img className="rounded-lg " src={img10} alt="" />
            <img className="rounded-lg " src={img11} alt="" />
            </div>
        </div>
    );
};

export default Banner;