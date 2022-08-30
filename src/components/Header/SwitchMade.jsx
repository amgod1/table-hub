import React from 'react'
import Switch from '@mui/material/Switch'

const SwitchMade = (props) => {
    return (
        <Switch 
            color="default" 
            className='d-flex align-items-center'
            onChange={(e) => props.onChangeTheme(e.target.checked)}
            checked={props.theme} 
        />
    )
}

export default SwitchMade