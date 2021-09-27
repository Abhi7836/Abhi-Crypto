import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar, Spin} from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useGetExchangesQuery } from '../services/cryptoApi';

const { Text } = Typography;
const { Panel } = Collapse;

const cssexch={
  backgroundColor: 'rgb(28, 22, 22)',
  margin:'1rem 0 0 0',
  padding:'2rem 2rem',
  borderRadius:'2rem'
}

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Spin/>;

  return (
    <div style={cssexch}>
      <Row  style={{textAlign: 'center'}}>
        <Col span={6}>Exchanges</Col>
        <Col span={6} >24h Trade Volume</Col>
        <Col span={6} >Markets</Col>
        <Col span={6} >Change</Col>
      </Row>
      <Row style={{textAlign: 'center'}}>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={(
                  <Row key={exchange.id}>
                    <Col span={6}  style={{textAlign: 'left'}}>
                      <Text style={{padding:'0 0.5rem'}}><strong>{exchange.rank}.</strong></Text>
                      <Avatar src={exchange.iconUrl} />
                      <Text  style={{padding:'0 0.5rem'}}><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6} >${millify(exchange.volume)}</Col>
                    <Col span={6} >{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6} >{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || 'OOPS! Sorry No Data Available')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Exchanges;