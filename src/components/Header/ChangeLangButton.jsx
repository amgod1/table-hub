import React from 'react'
import { Button } from 'react-bootstrap'

const ChangeLangButton = (props) => {

    const changeLanguage = () => {
        props.onChangeLang(!props.lang)
    }

    return (
        <Button 
            variant="light" 
            className='mx-2'
            onClick={ changeLanguage }
            >
                {(!props.lang)
                    ? 'Eng'
                    : 'Рус'
                }
                
        </Button>
    )
}

export default ChangeLangButton