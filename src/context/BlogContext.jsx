import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

// const blogType = [
//   {
//     title : '',
//     content : '',
//     image : '',
//     tag : '',
//     author : {
//         name : '',
//         image : ''
//     }
//   }
// ]
export const BlogContext = createContext({}) 

export const BlogContextProvider = ({children})=>{
    const [blogData, setBlogData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      const getBlogs = async(pageNumber)=>{
          setLoading(true);
          try {
          const response = await axios.get(
            `api/v1/getallblogs?search=${query}&page=${pageNumber}&limit=${10}`
          );
          const data = await response.data;
          setBlogData(data.blogs);
          setTotalPages(data.pagination.totalPages);
          } catch (error) {
          console.error('Failed to fetch blogs:', error);
          toast.error('A network error occurred, try again later')
          } finally {
            setTimeout(()=>{
              setLoading(false);
            },2000)
          
          }
      }
      getBlogs(currentPage)
    },[currentPage, query])
    

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
          setCurrentPage(pageNumber);
        }
    };

    const renderPagination = () => {
        const pageNumbers = [];
        const maxPageButtons = 5;
        const startPage = Math.max(
          1,
          Math.min(
            currentPage - Math.floor(maxPageButtons / 2),
            totalPages - maxPageButtons + 1
          )
        );
    
        for (let i = startPage; i < startPage + maxPageButtons && i <= totalPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              style={{
                margin: '0 5px',
                padding: '10px 15px',
                backgroundColor: i === currentPage ? '#007bff' : '#fff',
                color: i === currentPage ? '#fff' : '#000',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {i}
            </button>
          );
        }
    
        return (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                margin: '0 5px',
                padding: '10px 15px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Previous
            </button>
            {startPage > 1 && <span>...</span>}
            {pageNumbers}
            {startPage + maxPageButtons <= totalPages && <span>...</span>}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                margin: '0 5px',
                padding: '10px 15px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Next
            </button>
          </div>
        );
    };

    return(<BlogContext.Provider value={{blogData, renderPagination, loading, setQuery, query}}>
        {children}
    </BlogContext.Provider>)
}

export const useBlog = ()=>useContext(BlogContext)