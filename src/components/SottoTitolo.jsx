import Dropdown from "react-bootstrap/Dropdown"

const SottoTitolo = () => {
  return (
    <div className="d-flex align-items-center">
      <h1 className="px-5 mt-2 fw-bold d-inline-block">TV Shows</h1>
      <Dropdown className="d-inline-block">
        <Dropdown.Toggle
          variant="transparent"
          id="dropdown-basic"
          className="border-1 border-secondary"
        >
          Genres
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Horror</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Fantasy</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default SottoTitolo
