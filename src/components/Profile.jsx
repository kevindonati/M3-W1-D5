import {
  Container,
  Row,
  Col,
  Image,
  Dropdown,
  Button,
  FormCheck,
} from "react-bootstrap"
import avatar from "../assets/avatar.png"

const Profile = () => {
  return (
    <>
      <Container className="w-50">
        <Row>
          <h1 className="p-0">Edit Profile</h1>
          <hr />
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Image src={avatar} className="w-100" />
          </Col>
          <Col xs={9} className="p-">
            <p className="bg-secondary fs-5 p-1 w-75">Strive Student</p>
            <p className="text-secondary fs-4">Language:</p>
            <Dropdown id="dropdown">
              <Dropdown.Item href="#">Italiano</Dropdown.Item>
              <Dropdown.Item href="#">Espanol</Dropdown.Item>
              <Dropdown.Item href="#">German</Dropdown.Item>
            </Dropdown>

            <hr className="w-75 my-4" />

            <p className="text-secondary fs-4">Maturity settings:</p>
            <Button variant="secondary">ALL MATURITY SETTINGS</Button>
            <p className="mt-3">
              Show titles of{" "}
              <span className="fw-bold">all maturity ratings</span> for this
              profile.
            </p>
            <Button
              variant="transparent"
              className="border-1 border-secondary text-secondary rounded-0 px-4"
            >
              EDIT
            </Button>

            <hr className="w-75 my-4" />

            <p className="text-secondary fs-4">Autoplay controls</p>
            <FormCheck>
              Autoplay next episode in a series on all devices.
            </FormCheck>
            <FormCheck>
              Autoplay previews while browsing on all devices.
            </FormCheck>
          </Col>

          <hr className="my-4" />
        </Row>
        <Row>
          <Col xs={3}>
            <Button
              variant="transparent"
              className="w-100 border border-1 border-secondary text-secondary rounded-0"
            >
              Save
            </Button>
          </Col>
          <Col xs={3}>
            <Button
              variant="transparent"
              className="w-100 border border-1 border-secondary text-secondary rounded-0"
            >
              Cancel
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              variant="transparent"
              className="w-100 border border-1 border-secondary text-secondary rounded-0"
            >
              Delete Profile
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile
