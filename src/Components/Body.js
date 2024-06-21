import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Container } from "react-bootstrap";
import NewsList from "./NewsList";

const Body = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category') || '';
  const searchTerm = searchParams.get('search') || '';

  return (
    <Container>
      <Row>
        <div>
          <h1>{category.toUpperCase() || searchTerm.toUpperCase() || 'LATEST'} NEWS</h1>
          <NewsList category={category} searchTerm={searchTerm} />
        </div>
      </Row>
    </Container>
  );
}

export default Body;