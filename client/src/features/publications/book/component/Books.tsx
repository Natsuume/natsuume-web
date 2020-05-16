import React from "react";
import { getBooksState, BookSummary } from '../interface';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../../../../css/publications.css"
import { ThreeColumnProps, ThreeColumn } from '../../../../components/pages/common/Columns';

export const Books: React.FC = () => {
  const { books } = getBooksState.useState();
  return (
    <Container fluid>
      {books.map((book, key) =>
        <BookColumn book={book} key={key}></BookColumn>
      )}
    </Container>
  )
}

const BookColumn: React.FC<{book: BookSummary}> = ({book}) => {
  const props: ThreeColumnProps = {
    image: <Image src={book.cover} className="bookImage"></Image>,
    headline: <h3 className="bookTitle">{book.title}</h3>,
    description: <BookDescription book={book}></BookDescription>
  }

  return <ThreeColumn props={props}></ThreeColumn>
}


const BookDescription: React.FC<{book: BookSummary}> = ({book}) => {
  return (
    <Container fluid className="bookInfo">
      <Row>
        <p>{book.publisher}</p>
      </Row>
      <Row>
        <p>{book.author.split("／著").join(",")}</p>
      </Row>
    </Container>
  )
}