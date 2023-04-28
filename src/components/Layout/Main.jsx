import React from 'react';
import Header from './Header';
import NavigationBar from './NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import LaftNav from './LaftNav';
import RightNav from './RightNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col sm={3}>
                        <LaftNav></LaftNav>
                    </Col>
                    <Col sm={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col sm={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;