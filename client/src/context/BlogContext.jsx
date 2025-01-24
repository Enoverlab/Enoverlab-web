import { createContext, useState } from "react";
import axios from 'axios'

const blogType = [
    {
        title : '',
        content : '',
        image : '',
        tag : '',
        author : {
            name : '',
            image : ''
        }
    }
]
export const BlogContext = createContext({}) 

export const BlogContextProvider = ({children})=>{
    const [blogData, setBlogData] = useState(blogType)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchCurrentPage, setSearchCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const getBlogs = async(pageNumber)=>{
        setLoading(true);
        try {
        const response = await axios(
            `/getallblogs?page=${pageNumber}&limit=${10}`
        );
        const data = await response.json();
        setBlogData(data.blogs);
        setTotalPages(data.pagination.totalPages);
        } catch (error) {
        console.error('Failed to fetch blogs:', error);
        } finally {
        setLoading(false);
        }
    }
    const searchBlog = (query,pageNumber)=>{

    }
    return(<BlogContext.Provider value={{blogData}}>
        {children}
    </BlogContext.Provider>)
}