import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const SingleNews = () => {
    const singleNews=useLoaderData();
    const { title, image_url, details,_id,category_id } = singleNews;
    return (
        <Card className='my-4'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <p>{details}</p>
        </Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button variant="danger">Go to News</Button>
        </Link>
      </Card.Body>
    </Card>
    );
};

export default SingleNews;