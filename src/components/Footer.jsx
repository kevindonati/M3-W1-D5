import { Container, Row, Col, ListGroup, Button } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="mt-5 mb-2">
            <a
              href="https://www.facebook.com/netflix/?locale=it_IT"
              target="_blank"
              className="text-secondary"
            >
              <i className="fs-3 me-3 bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/netflix/?hl=it"
              target="_blank"
              className="text-secondary"
            >
              <i className="fs-3 me-3 bi bi-instagram"></i>
            </a>
            <a
              href="https://x.com/netflix"
              target="_blank"
              className="text-secondary"
            >
              <i className="fs-3 me-3 bi bi-twitter"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"
              target="_blank"
              className="text-secondary"
            >
              <i className="fs-3 bi bi-youtube"></i>
            </a>
          </Col>
        </Row>

        <Row className="g-3">
          <Col xs={6} md={3}>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Audio and Subtitles
              </ListGroup.Item>
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Media Center
              </ListGroup.Item>
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Privacy
              </ListGroup.Item>
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Contact Us
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs={6} md={3} className="text-end text-md-start">
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Audio Description
              </ListGroup.Item>
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Investor Relations
              </ListGroup.Item>
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Legal Notices
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs={6} md={3}>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Help Center
              </ListGroup.Item>
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Jobs
              </ListGroup.Item>
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Cookie Preferences
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs={6} md={3} className="text-end text-md-start">
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Gift Cards
              </ListGroup.Item>
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Terms of Use
              </ListGroup.Item>
              <ListGroup.Item className="bg-black border-0 text-secondary p-0">
                Corporate Information
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Button className="rounded-0 mt-4" variant="outline-secondary">
          Service Code
        </Button>
        <p className="fw-bold mt-3 text-secondary">
          &copy; 1997-2019 Netflix, Inc. &#123;i-0d00fcda2fdf9c0de&#125;
        </p>
      </Container>
    </>
  )
}

export default Footer
