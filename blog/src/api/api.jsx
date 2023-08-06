import axios from "axios";

export const createBlog = (blog) => axios.post('http://localhost:8800/blog', blog);
export const getBlogs = () => axios.get('http://localhost:8800/blog');
export const getBlog = (id) => axios.get(`http://localhost:8800/blog/${id}`);
export const deleteBlog = (id) => axios.delete(`http://localhost:8800/blog/${id}`);
export const updateBlog = (id, blog) => axios.put(`http://localhost:8800/blog/${id}`, blog);

export const createUser = (user) => axios.post('http://localhost:8800/user', user);
export const getUsers = () => axios.get('http://localhost:8800/user');

export const loginUser = (user) => axios.post('http://localhost:8800/user/login', user);

export const getUser = (id) => axios.get(`http://localhost:8800/user/${id}`);
export const deleteUser = (id) => axios.delete(`http://localhost:8800/user/${id}`);
export const updateUser = (id, user) => axios.put(`http://localhost:8800/user/${id}`, user);