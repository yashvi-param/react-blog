Blog App (React)
Project Description

This is a simple Blog Management Application built using React and React Router.
The application allows users to create blogs, view blog lists, filter blogs, and read blog details.

Features

Create a new blog

View all blogs

Filter blogs by category

View detailed blog page

API integration for fetching blogs

React Router for page navigation

Technologies Used

React

React Router DOM

Axios / API calls

JavaScript

CSS

Project Structure
src
│
├── Components
│   ├── BlogForm.jsx
│   ├── BlogList.jsx
│   └── BlogDetail.jsx
│
├── App.jsx
├── main.jsx
└── API.js
Installation

Clone the repository

git clone https://github.com/your-username/blog-app.git

Navigate to the project folder

cd blog-app

Install dependencies

npm install

Start the development server

npm run dev
Routes
Route	Description
/	Shows the blog list
/blog/:id	Shows the blog details
Components
BlogForm

Used to create a new blog post.

BlogList

Displays all blog posts and allows filtering.

BlogDetails

Displays the full details of a selected blog.

State Management

blogs → stores all blog data

filter → stores the selected filter category

API Integration

Blogs are fetched from the API using:

API.get("/blogs")

The getBlogs() function is used to retrieve blog data and update the state.

Author

Yashvi Joshi
Full Stack Developer Student
