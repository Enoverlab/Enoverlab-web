import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BlogCard from './BlogCard'
import { Article } from './BlogContent'
import ReactPaginate from 'react-paginate'

const newArrangement = Article.reverse()

const BlogHero = ({articles}) => {
  return (
    <StyledBlogHero>
        <div className="blog-hero-container">
        {/* <MainBlogCard/>         */}
        
         <div className="blog-card-grid">
           {articles &&
             articles.map((item) => {
                return (
                  <BlogCard
                  key={item.id}
                  category={item.category}
                  contentTitle={item.title}
                  contentText={item.content1 ? item?.content1?.slice(0, 100) + '...' : item.content4.slice(0,100) + '...'}
                  authorName={item.authorName}
                  cardImg={item.cardImg}
                  thumbImg={item.thumbImg}
                  date={item.date}
                  id={item.id}
                  />
                )
              })
           }
          </div> 
        </div>
    </StyledBlogHero>
  )
}

export default BlogHero

const StyledBlogHero = styled.div`
  a{
    text-decoration: none;
  }
  .blog-hero-container {
    padding: 1% 8% 5% 8%;
    .blog-card-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 4rem;
      margin-top: 3.1875rem;

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
      }

    }
  }

`

export function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[itemOffset])

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = newArrangement.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newArrangement.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newArrangement.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <StyledPaginated>
      <BlogHero articles={currentItems} />
      <div className='mainy'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        pageCount={pageCount}
        previousLabel="< previous"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        disabledClassName="disabledbutton"
        renderOnZeroPageCount={null}
      />
      </div>
    </StyledPaginated>
  );
}

const StyledPaginated = styled.div`
  .mainy{
    display : flex;
    justify-content: center;
  }
  .pagination{
    display : flex;
    list-style: none;
    margin-bottom : 2rem;
    gap: 2rem;
  }
  .page-item{
    font-size: 1.6rem;
    font-weight: 600;
    color: #0000FF;
    border-radius: 10px;
  }
  .active{
    border: 0.1rem solid blue;
    border-radius: 10px;
    padding: 0px;
  }
  .disabledbutton{
    font-weight : 400;
    color : #000000;
    pointer-events: none;
    cursor: default;
  }
`