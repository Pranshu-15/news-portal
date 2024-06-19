import { Row, Container } from "react-bootstrap";
import NewsList from "./NewsList";

const Body = ({ category, searchTerm }) => {
  return (
    <>
      <Container>
        <Row>
          <div>
            <h1>{category.toUpperCase()} NEWS</h1>
            <NewsList category={category} searchTerm={searchTerm} />
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Body;
