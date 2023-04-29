import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from './Qzone';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='my-1' variant='outline-danger'>Login With Google</Button>
            <Button className='my-1' variant='outline-secondary'>Login With Github</Button>
            <h4 className='my-3'>Find Us On</h4>
            <ListGroup as="ol">
                <ListGroup.Item as="li"><FaFacebook /><span className='ps-2'>Facebook</span></ListGroup.Item>
                <ListGroup.Item as="li"><FaTwitter /><span className='ps-2'>Twitter</span></ListGroup.Item>
                <ListGroup.Item as="li"><FaInstagram /><span className='ps-2'>Instagram</span></ListGroup.Item>
            </ListGroup>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;