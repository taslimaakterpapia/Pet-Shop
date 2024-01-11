import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import BlogStyle from "./BlogStyle";

const Blog = () => {
  const [petBlog, setPetBlog] = useState([]);

  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
      .then(data => setPetBlog(data))
  }, []);

  const visibleBlogs = petBlog.slice(0, 3);

  return (
    <div>
      <h1 className="text-3xl text-orange-400 font-bold text-center my-5 underline underline-offset-4">Our Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {
          visibleBlogs.map(item => <BlogStyle
            
            key={item.id}
            item={item}
            ></BlogStyle>)
        }
      </div>

      {petBlog.length > 3 && (
        <div className="text-center mb-10 items-center justify-center">
          <Link to="/blog" className="bg-orange-500 hover:bg-green-600 text-white font-semibold underline px-5 py-4 rounded-xl ">See More</Link>
        </div>
      )}

      
    </div>
  );
};

export default Blog;
