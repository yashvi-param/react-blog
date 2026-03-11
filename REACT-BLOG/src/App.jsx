import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogForm from "./Components/BlogForm";
import BlogList from "./Components/BlogList";
import BlogDetails from "./Components/BlogDetail";

function App() {

  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState("All");

  const getBlogs = () => {

    API.get("/blogs")
      .then((res) => setBlogs(res.data));

  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (

    <BrowserRouter>

      <BlogForm getBlogs={getBlogs} />

      <Routes>

        <Route
          path="/"
          element={
            <BlogList
              blogs={blogs}
              filter={filter}
              setFilter={setFilter}
            />
          }
        />

        <Route
          path="/blog/:id"
          element={<BlogDetails />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;