import BrandBanner from "../../../assets/brand-banner.png"

import b from "../../../assets/b.jpg"
import c from "../../../assets/c.jpg"
import d from "../../../assets/d.jpg"
import e from "../../../assets/e.jpg"
import f from "../../../assets/f.jpg"

import h from "../../../assets/h.jpg"


const Brand = () => {
    return (
        <div className="my-10 ">
            <img className="rounded-xl" src={BrandBanner} alt="" />


            <div>
                <h1 className="text-3xl text-orange-400 font-bold text-center my-10 underline underline-offset-4">Brands we stock</h1>

                <div className="flex flex-wrap gap-3 bg-white py-5 rounded-xl">
                      
                       <img src={b} alt="" />
                       <img src={c} alt="" />
                       <img src={d} alt="" />
                       <img src={e} alt="" />
                       <img src={f} alt="" />
                      
                       <img src={h} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brand;