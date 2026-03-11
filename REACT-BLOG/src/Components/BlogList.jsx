import { Link } from "react-router-dom";

function BlogList({ blogs, filter, setFilter }) {

  const filtered =
    filter === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === filter);

  return (

    <div>

      <h2>Blog List</h2>

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Technology")}>Technology</button>
      <button onClick={() => setFilter("Sports")}>Sports</button>
      <button onClick={() => setFilter("Business")}>Business</button>

      {filtered.map((blog) => (

        <div key={blog.id}>

          <img src={blog.image} width="200" />

          <h3>{blog.title}</h3>

          <p>{blog.blogger_name}</p>

          <Link to={`/blog/${blog.id}`}>
            Read More...
          </Link>

        </div>

      ))}

    </div>

  );
}

export default BlogList;