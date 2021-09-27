import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const logoContainer={
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.2rem 0',
    backgroundColor: '#001529'
}

const Navbar = () => {
    return (
        <>
            <div style={logoContainer}>
                <Avatar src={icon} size="small" />
                <Typography.Title level={3} style={{margin:'0 0 0 0.5rem'}}><Link to="/">Abhi-Crypto</Link></Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2"icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </>
    )
}

export default Navbar
