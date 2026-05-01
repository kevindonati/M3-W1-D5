import { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"

class NewReleases extends Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=ed04f11a&s=pokemon ")
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nella response", response.status)
        }
      })
      .then((data) => {
        console.log(data)
        this.setState({
          movies: data.Search,
        })
      })
      .catch((err) => {
        console.log("Errore nella fetch", err)
      })
  }
  render() {
    return (
      <Container fluid className="px-5 mt-5">
        <Row className="my-3">
          <Col>
            <h3>New Releases</h3>
          </Col>
        </Row>
        <Row className="justify-content-center g-3">
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

export default NewReleases
