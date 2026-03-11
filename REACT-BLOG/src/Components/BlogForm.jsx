import { useState } from "react";
import axios from "axios";

function BlogForm({ getBlogs }) {

  const [form, setForm] = useState({
    category: "",
    title: "",
    blogger_name: "",
    image: "",
    description: ""
  });

  const [error, setError] = useState({});

  const validate = () => {

    let err = {};

    if (!form.category) err.category = "Select category";

    if (form.title.length < 3)
      err.title = "Title must be 3 characters";

    if (form.blogger_name.length < 3)
      err.blogger_name = "Name must be 3 characters";

    if (form.description.length < 3)
      err.description = "Description must be 3 characters";

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    await API.post("/blogs", form);

    getBlogs();

    setForm({
      category: "",
      title: "",
      blogger_name: "",
      image: "",
      description: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Add Blog</h2>

      <select
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      >
        <option value="">Select Category</option>
        <option>Entertainment</option>
        <option>Technology</option>
        <option>Sports</option>
        <option>Business</option>
        <option>Health</option>
        <option>Science</option>
      </select>
      <p>{error.category}</p>

      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />
      <p>{error.title}</p>

      <input
        type="text"
        placeholder="Blogger Name"
        value={form.blogger_name}
        onChange={(e) =>
          setForm({ ...form, blogger_name: e.target.value })
        }
      />
      <p>{error.blogger_name}</p>

      <input
        type="text"
        placeholder="Image URL"
        value={form.image}
        onChange={(e) =>
          setForm({ ...form, image: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />
      <p>{error.description}</p>

      <button type="submit">Add Blog</button>

    </form>
  );
}

export default BlogForm;