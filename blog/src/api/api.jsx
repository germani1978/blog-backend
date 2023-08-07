import axios from "axios";

export const createBlog = (blog) => axios.post('http://localhost:4000/blog', blog);
export const getBlogs = () => axios.get('http://localhost:4000/blog');
export const getBlog = (id) => axios.get(`http://localhost:4000/blog/${id}`);
export const deleteBlog = (id) => axios.delete(`http://localhost:4000/blog/${id}`);
export const updateBlog = (id, blog) => axios.put(`http://localhost:4000/blog/${id}`, blog);

export const createUser = (user) => axios.post('http://localhost:4000/user', user);
export const getUsers = () => axios.get('http://localhost:4000/user');

export const loginUser = (user) => axios.post('http://localhost:4000/user/login', user);
export const logout = () => axios.post('http://localhost:4000/user/logout');

export const getUser = (id) => axios.get(`http://localhost:4000/user/${id}`);
export const deleteUser = (id) => axios.delete(`http://localhost:4000/user/${id}`);
export const updateUser = (id, user) => axios.put(`http://localhost:4000/user/${id}`, user);