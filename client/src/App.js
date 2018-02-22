import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logup from './components/Logup/Logup';
import Nav from './components/Nav/Nav';
import Member from './components/Member/Member';
import Blog from './components/Blog/Blog';
import CreateTopic from './components/CreateTopic/CreateTopic';
import Community from './components/Community/Community';
import Department from './components/Department/Department';
import Club from './components/Club/Club';
import Resource from './components/Resource/Resource';
import Event from './components/Event/Event';
import CreateArticle from './components/CreateArticle/CreateArticle';
import User from './components/User/User';
import EditNav from './components/EditNav/EditNav';
import Topic from './components/Topic/Topic';
import Article from './components/Article/Article';
import './App.css';
import { Row, Col } from 'antd';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Row className="nav" type="flex" justify="center">
                    <Col xs={24} sm={23} md={22} lg={21} xl={20}>
                        <Nav />
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col xs={24} sm={23} md={22} lg={21} xl={20}>
                        <Router>
                            <section style={{ overflow: 'hidden' }}>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/logup" component={Logup} />
                                <Route exact path="/member" component={Member} />
                                <Route exact path="/blog" component={Blog} />
                                <Route exact path="/community" component={Community} />
                                <Route exact path="/department" component={Department} />
                                <Route exact path="/resource" component={Resource} />
                                <Route exact path="/club" component={Club} />
                                <Route exact path="/event" component={Event} />
                                <Route exact path="/topic/create" component={CreateTopic} />
                                <Route exact path="/article/create" component={CreateArticle} />
                                <Route exact path="/user" component={User} />
                                <Route exact path="/user/edit" component={EditNav} />
                                <Route exact path="/topic" component={Topic} />
                                <Route exact path="/article" component={Article} />
                            </section>
                        </Router>
                    </Col>
                    <Col xs={24} sm={23} md={22} lg={21} xl={20}>
                        <footer className="footer">©Created By HelloWorld Web Team</footer>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default App;
