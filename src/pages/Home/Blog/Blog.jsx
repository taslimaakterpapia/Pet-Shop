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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6">
        {
          visibleBlogs.map(item => <BlogStyle
            
            key={item.id}
            item={item}
            ></BlogStyle>)
        }
      </div>

      {petBlog.length > 3 && (
        <div className="text-center mt-4">
          <Link to="/see-more" className="bg-green-500 text-white font-semibold underline p-5 rounded-xl">See More</Link>
        </div>
      )}
    </div>
  );
};

export default Blog;
