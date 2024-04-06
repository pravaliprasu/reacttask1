import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spin from '../spinners/spin';
import Falls from '../spinners/spin';

function CustomCard({name,imageurl,loadervisible}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageurl} height={300} />
      <Card.Body>
        {/* <Spin/> */}
        {/* <Falls/> */}

{
    loadervisible
    ?
    <Falls/>
    :
    null
}
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;