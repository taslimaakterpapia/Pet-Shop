

const BlogStyle = ({ item }) => {

    const { title, content } = item;

    return (
        <div className="card bg-gray-100 shadow-xl items-center justify-center">

        {/* <figure className="px-6 pt-6">
            <img src={image} alt="Shoes" className="rounded-xl" />
        </figure> */}
        <div className="card-body items-center text-center">
                      
            <h2 className="text-2xl font-bold text-amber-600">{title} </h2>
            <p className="text-gray-500 pt-2">{content}</p>
            <div className="card-actions">
                <button onClick={() => handleAddToCard(item)} className="btn btn-white bg-green-700 hover:bg-orange-600 font-bold border-none text-white mt-3">See More</button>
            </div>
        </div>
    </div >
    );
};

export default BlogStyle;