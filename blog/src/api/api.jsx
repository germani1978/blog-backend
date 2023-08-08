import axios from "axios";

const config = {
    headers: { "Content-Type" : "application/json" },
    withCredentials : true
}

export const createBlog = (blog) => axios.post('http://localhost:4000/blog', blog); //this
export const getBlogs = (cat) => axios.get(`http://localhost:4000/blog/${cat}`, config);
export const getBlog = (id) => axios.get(`http://localhost:4000/blog/${id}`);
export const deleteBlog = (id) => axios.delete(`http://localhost:4000/blog/${id}`, config);
export const updateBlog = (id, blog) => axios.put(`http://localhost:4000/blog/${id}`, blog); //this

export const createUser = (user) => axios.post('http://localhost:4000/user', user);
export const getUsers = () => axios.get('http://localhost:4000/user');

export const loginUser = (user) => axios.post('http://localhost:4000/user/login', user, config);
export const logoutUser = () => axios.post('http://localhost:4000/user/logout');

export const getUser = (id) => axios.get(`http://localhost:4000/user/${id}`);
export const deleteUser = (id) => axios.delete(`http://localhost:4000/user/${id}`);
export const updateUser = (id, user) => axios.put(`http://localhost:4000/user/${id}`, user);