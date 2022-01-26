import React from 'react'
import millify from 'millify';
import { Typography,Row,Col,Statistic,Spin} from 'antd';
import {Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';


const {Title}=Typography;

const cssstats={
    textAlign: 'center',
    backgroundColor: 'rgb(28, 22, 22)',
    margin:'1rem 0 0 0',
    padding:'2rem 0',
    borderRadius:'2rem'
}
const csstitle={
    backgroundColor: 'rgb(28, 22, 22)',
    margin:'1rem 0',
    padding:'2rem',
    borderRadius:'2rem'
}

const Homepage = () => {
    const {data, isFetching}= useGetCryptosQuery(10);
    const globalStats=data?.data?.stats;
    console.log("1",globalStats);
    if(isFetching) return <Spin />;
    return (
        <div>
        <div style={cssstats}>
            {/*process.env.REACT_APP_RAPID_KEY*/}
            <Title level={1} className="heading">Global Crypto Stats</Title>
            <Row gutter={[32, 32]}>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
    </Row>
        </div>
        <div style={csstitle}>
            <div className="csstitle" style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
            <Title level={2} className="home-title" >Top 10 Cryptos In The World</Title>
            <Title level={4} className="show-more" ><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
        </div>
        <div style={csstitle}>
            <div className="csstitle" style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
            <Title level={2} className="home-title">Latest Crypto News</Title>
            <Title level={4} className="show-more" ><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified />
        </div>
        </div>
    )
}

export default Homepage
