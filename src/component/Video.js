import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

function Video(props) {
    const {data}=props;
  return (
    <Card style={{ width: '18rem' }}>
    <video width="320" height="250" controls>
        <source src={data.sources} />
    </video>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Date : {data.released_date}
        </Card.Text>
        <ReactStars
    count={5}
    size={24}
    value={data.rating}
    activeColor="#ffd700"
  />,
        
      </Card.Body>
    </Card>
  );
}

export default Video;