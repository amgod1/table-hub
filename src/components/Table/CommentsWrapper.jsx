import { React, useState } from 'react'
import * as Axios from 'axios'
import { Button, Form } from 'react-bootstrap'


const CommentsWrapper = (props) => {
    let comments = []
    const [comment, setComment] = useState('')

    const onRenderComment = () => {
        if (comment === '' && comment === ' ') return
        props.onRenderComment(localStorage.login, props.link.slice(1), comment)
        setComment('')
    }

    const deleteComment = (id) => {
        Axios.delete(`http://localhost:3306/api/delete/comments/${id}`)
    }

    if (!!props.allCommentsInfo) {
        comments = JSON.parse(JSON.stringify(props.allCommentsInfo))
        comments = comments.filter(el => el.link === props.link.slice(1)).sort((x, y) => x.id - y.id).map(el => 
            <div key={el.id} className='mb-5'>
                <div className='mt-4' >
                    <h6>{el.login}:</h6>
                    <p>{el.text}</p>
                </div>
                {(props.isAdmin || localStorage.login === el.login) 
                    ? <Button 
                        className='h-100' 
                        variant="danger" 
                        size="sm" 
                        onClick={() => deleteComment(el.id)}>
                            {!props.lang
                                ? 'Delete'
                                : 'Удалить'
                            }
                    </Button> 
                    : <></>
                }
            </div>
        )
    }

    return (
        <>
            {(props.isLogged)
                ? <>
                    <h3 className='mb-3'>                            
                        {!props.lang
                            ? 'Comments:'
                            : 'Комментарии:'
                        }
                    </h3>
                    <div className='mb-5'>
                        <Form.Control 
                            type="text" 
                            as="textarea" 
                            value={comment} 
                            onChange={e => setComment(e.target.value)} 
                            placeholder={!props.lang
                                ? 'Type your comment here'
                                : 'Напишите комментарий тут'
                            } 
                        />
                        <Button className='mt-3' onClick={onRenderComment}>
                            {!props.lang
                                ? 'Add comment'
                                : 'Добавить комментарий'
                            }   
                        </Button>
                    </div>
                </>
                : <>
                    {(comments.length)
                        ? <h3 className='mb-3'>
                            {!props.lang
                                ? 'Comments:'
                                : 'Комментарии:'
                            } 
                        </h3>
                        : <></>
                    }
                </>
            }
            { comments }
        </>
    )
}

export default CommentsWrapper