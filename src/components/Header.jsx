import React from 'react'
import {Typography} from 'antd';


const header={
    height:"4.3rem",
    padding:0,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#001529',
}


const Header = () => {
    return (
        <div style={header}>
            <Typography.Title level={3}  style={{margin:'0'}}> Welcome Abhishekk</Typography.Title>
        </div>
    )
}

export default Header
