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
                        {(!props.lang)
                            ? 'Item name: '
                            : 'Название айтема: '
                        }
                        {el.string1}
                    </h6>
                    <p>
                        {(!props.lang)
                            ? 'Tags: '
                            : 'Теги: '
                        }
                        {el.tags}
                    </p>
                </a>
            </Row>
        )
        return (
            (localStorage.search === '')
                ? <h3 className='mt-3'>
                    {(!props.lang)
                        ? 'No tags entered in search bar'
                        : 'Теги для поиска не добавлены'
                    }
                    
                </h3>
                : <>
                    <h3 className='mt-3'>
                        {(!props.lang)
                            ? `Found ${newData.length} items with such a tag:`
                            : `Найдено ${newData.length} айтемов с такими тегами`
                        }
                    </h3>
                    { newData }
                </>
                
        )
    } else return <></>
}

export default SearchHub