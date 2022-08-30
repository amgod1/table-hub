import React from 'react'
import { Row } from 'react-bootstrap'

const SearchHub = (props) => {
    let newData
    if (!!props.searchData) {
        newData = [...props.searchData]
        newData = newData.map(el => 
            <Row className='mt-3' key={el.id}>
                <a href={'/' + el.link}>
                    <h6>
                        Item name: {el.string1}
                    </h6>
                    <p>
                        Tags: {el.tags}
                    </p>
                </a>
            </Row>
        )
        return (
            (localStorage.search === '')
                ? <h3 className='mt-3'>No tags entered in search bar</h3>
                : <>
                    <h3 className='mt-3'>Found {newData.length} items with such a tag:</h3>
                    { newData }
                </>
                
        )
    } else return <></>
}

export default SearchHub