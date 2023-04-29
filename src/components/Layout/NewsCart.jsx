import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
  const { title, image_url, details,_id,author,total_view,rating } = news;
  return (
    <Card className="my-4">
      <Card.Header className="d-flex align-items-center">
      <Image style={{height:"48px"}} src={author.img} roundedCircle />
      <div className="ps-3 flex-grow-1">
        <p className="mb-0">{author.name}</p>
        <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
      </div>
      <div>
        <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length<250?<p>{details}</p>:<p>{details.slice(0,250)}...<Link to={`/news/${_id}`}>Read More</Link></p>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div>
          <Rating
          placeholderRating={rating.number}
          emptySymbol={<FaRegStar/>}
          readonly
          placeholderSymbol={<FaStar/>}
          fullSymbol={<FaStar/>}
          /> {rating.number}
        </div>
        <div>
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
