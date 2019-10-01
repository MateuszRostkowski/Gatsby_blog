import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationLinks = ({ currentPage, numberOfPages }) => {
    // checks that site is first or not returns true or false
    const isFirst = currentPage === 1;
    // checks that site is last or not returns true or false
    const isLast = currentPage === numberOfPages;
    // 
    const previousPage = (currentPage - 1) === 1 ? '/' : '/' + (currentPage - 1).toString();
    const nextPage = '/' + (currentPage + 1).toString();
    
    return (
        <Pagination aria-label="Page navigation example">
            {isFirst ? (
                <PaginationItem disabled>
                    <PaginationLink previous href='/'></PaginationLink>
                </PaginationItem>
            ):(
                <PaginationItem>
                    <PaginationLink previous href={previousPage}></PaginationLink>
                </PaginationItem>
            )}
            {Array.from({ length: numberOfPages}, (_, i) => currentPage === i + 1 ? (
                <PaginationItem active key={`page-number${i + 1}`}>
                    <PaginationLink href={`/${i === 0 ? '' : + (i + 1)}`}>
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>
            ):(
                <PaginationItem key={`page-number${i + 1}`}>
                    <PaginationLink href={`/${i === 0 ? '' : + (i + 1)}`}>
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>
            ))}
            {isLast ? (
                <PaginationItem disabled>
                    <PaginationLink next href={nextPage}></PaginationLink>
                </PaginationItem>
            ):(
                <PaginationItem>
                    <PaginationLink next href={nextPage}></PaginationLink>
                </PaginationItem>
            )}
        </Pagination>
    )
}

export default PaginationLinks