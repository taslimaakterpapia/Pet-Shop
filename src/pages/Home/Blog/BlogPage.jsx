import { useEffect, useState } from "react";

import BlogStyle from "./BlogStyle";

const BlogPage = () => {
    const [petBlog, setPetBlog] = useState([]);

  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
      .then(data => setPetBlog(data))
  }, []);
    return (
        <div className="mx-5 md:mx-0">
        <h1 className="text-3xl text-orange-400 font-bold text-center my-5 underline underline-offset-4">Our Blog</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {
            petBlog.map(item => <BlogStyle
              
              key={item.id}
              item={item}
              ></BlogStyle>)
          }
        </div>
  
       
  
        
      </div>
    );
};

export default BlogPage;