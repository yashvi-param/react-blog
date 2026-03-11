import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BlogDetails() {

  const { id } = useParams();

  const [blog, setBlog] = useState({});

  useEffect(() => {

    API.get(`/blogs/${id}`)
      .then((res) => setBlog(res.data));

  }, []);

  return (

    <div>

      <h1>{blog.title}</h1>

      <img src={blog.image} width="400" />

      <h3>{blog.blogger_name}</h3>

      <p>{blog.description}</p>

      <p>Category: {blog.category}</p>

    </div>

  );
}

export default BlogDetails;