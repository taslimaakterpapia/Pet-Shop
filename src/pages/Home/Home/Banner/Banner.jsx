import img3 from "../../../../assets/img3.jpg"
import img2 from "../../../../assets/img2.jpg"
import img1 from "../../../../assets/img1.jpg"
import img4 from "../../../../assets/img4.jpg"
import img5 from "../../../../assets/img5.jpg"

const Banner = () => {
    return (
        <div className="flex gap-3">
            <img className="rounded-lg" src={img3} alt="" />
            <div className="grid grid-cols-2 gap-3">
            <img className="rounded-lg" src={img2} alt="" />
            <img className="rounded-lg" src={img1} alt="" />
            <img className="rounded-lg" src={img4} alt="" />
            <img className="rounded-lg" src={img5} alt="" />

            </div>
        </div>
    );
};

export default Banner;