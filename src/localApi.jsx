import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({
   baseURL: BASE_URL,
});

export const getPosts = () => {
   return axiosInstance.get("/posts");
}


export const createPost = (newPost) => {
   return axiosInstance.post("/posts", newPost);
}

export const updatePost = (postID, updateData) => {
   return axiosInstance.put(`/posts/${postID}`, updateData);
}


export const deletePost = (postID) => {
   return axiosInstance.delete(`/posts/${postID}`);
}


export default { getPosts, createPost, updatePost, deletePost };