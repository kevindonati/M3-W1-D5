import { Component } from "react"
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap"

class TrendingNow extends Component {
  state = {
    movies: [],
    caricamento: true,
    errore: false,
  }
  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=ed04f11a&s=Mission:%20Impossible ")
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nella response", response.status)
        }
      })
      .then((data) => {
        this.setState({
          movies: data.Search,
          caricamento: false,
        })
      })
      .catch((err) => {
        console.log("Errore nella fetch", err)
        this.setState({
          caricamento: false,
          errore: true,
        })
      })
  }
  render() {
    return (
      <Container fluid className="px-5 mt-5">
        <Row className="my-3">
          <Col>
            <h3>Trending Now</h3>
          </Col>
        </Row>
        <Row className="justify-content-center g-3">
          {this.state.caricamento && (
            <div className="d-flex justify-content-center my-5">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          {this.state.errore && (
            <Alert variant="danger">Impossibile caricare i film.</Alert>
          )}
          {this.state.movies.slice(0, 6).map((film) => {
            return (
              <Col
                xs={12}
                sm={6}
                md={4}
                xl={2}
                className="text-center"
                key={film.imdbID}
              >
                <img
                  className="w-100 h-100"
                  src={film.Poster}
                  alt={film.Title}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default TrendingNow
