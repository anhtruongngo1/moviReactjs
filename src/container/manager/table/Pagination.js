import React from 'react'
import "../table/Pagination.scss"
const Pagination = ({ postsPerPage, totalPosts , Paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }


  return (
      <ul className="pagination">
          {pageNumbers.map(number => (
              <li onClick={() => Paginate(number)}
                  key={number} className="pagination-item">
                  <span  className="pagination-link">
                      {number}
                  </span>
                  
              </li>
          )
              
          )}
      </ul>
  )
}
export default Pagination
