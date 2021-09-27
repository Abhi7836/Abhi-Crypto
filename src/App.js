import React  from "react";
import {Switch,Route,Link} from 'react-router-dom';
import {Layout, Space} from 'antd';
import {Navbar,Header,Homepage,Cryptocurrencies,CryptoDetails,Exchanges,News} from './components'
import './App.css'
import 'antd/dist/antd.dark.css';

const {Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
       <Sider breakpoint="lg" collapsedWidth="0" style={{height: '100vh',position: 'fixed',
        left: 0,}}>
         <Navbar />
       </Sider>
       <Layout className="site-layout mar">
        <Header className="site-layout-background" style={{ padding: 0 }}/>
        <Content style={{ margin: '0 1.5rem 0',overflow: 'initial'}}>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Copyright © 2021 Created by Abhishekk <br />
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </Footer>
       </Layout>
    </Layout>
  );
}

export default App;
