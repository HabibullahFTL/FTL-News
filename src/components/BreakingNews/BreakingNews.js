
import { Jumbotron, Button, Container } from 'react-bootstrap';

const BreakingNews = () => {
    return (
        <Container className="my-2">
            <Jumbotron>
                <h1>Breaking News!</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora rerum voluptates assumenda quidem ea rem. Iste voluptas magni, tenetur veritatis amet cupiditate odio enim hic vel praesentium minus odit distinctio.
                </p>
                <Button variant="primary">Learn more</Button>
            </Jumbotron>
        </Container>
    );
};

export default BreakingNews;