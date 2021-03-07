import React, { Component } from 'react'
import {Pagination} from 'react-bootstrap'
class Paginations extends Component{
    
    render() {
        let { pageIndex, pageSize, totalProducts, prevPage, nextPage, paginationIndex } = this.props
        const indexArray = []
        for (let i = 1; i <= Math.ceil(totalProducts / pageSize); i++){
            indexArray.push(i)
        }
        return (
            <Pagination className='pagination'>
            <Pagination.First onClick={prevPage}  />
                {
                    indexArray.map(index => (
                    <Pagination.Item onClick ={() => paginationIndex(index)} className={pageIndex===index?'active':""}>{index}</Pagination.Item>
                    ))
            }
            <Pagination.Last onClick={nextPage} />
          </Pagination>
        )
    }
}
export default Paginations