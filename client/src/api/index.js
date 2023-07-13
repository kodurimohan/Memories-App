import axios from "axios";

const API = axios.create({baseURL: 'https://memories-app-0er8.onrender.com'})

API.interceptors.request.use((req) => {
    const storage = localStorage.getItem('profile')
    if(storage) {
        req.headers.Authorization = `Bearer ${JSON.parse(storage).token}`
    }
    return req;
})


export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search||'none'}&tags=${searchQuery.tags}`)
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPOst) => API.patch(`/posts/${id}`, updatedPOst);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);
export const comment = (value,id) => API.post(`posts/${id}/commentPost`,{value});

export const signIn = (formData) => API.post('/user/signin',formData);
export const signUp = (formData) => API.post('/user/signup',formData);
