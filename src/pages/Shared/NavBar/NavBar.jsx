import icon from '../../../assets/icon.png';



const NavBar = () => {
    return (
        <div >


            <div className='flex items-center justify-between'>
                <img
                    src={icon}
                    alt=""
                    style={{ width: '200px', height: '80px' }}
                />


                <div className="flex items-center justify-center p-5">
                    <div className="rounded-lg p-5">
                        <div className="flex">


                            <input type="text" className="w-full max-w-[400px] rounded-s bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" />

                            <input type="button" value="Search" className="bg-orange-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-green-500 transition-colors" />


                        </div>
                    </div>
                </div>









                <div>
                    
                </div>










            </div>
        </div>
    );
};

export default NavBar;
