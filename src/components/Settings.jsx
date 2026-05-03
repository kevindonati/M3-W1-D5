import { Container, Row, Col, Button, Image } from "react-bootstrap"
import avatar from "../assets/avatar.png"

const Settings = () => {
  return (
    <Container className="mt-5">
      <h3>Account</h3>
      <hr />

      <Row>
        <Col xs={12} lg={3} className="text-center text-lg-start mb-3 mb-lg-0">
          <p className="text-secondary">MEMBERSHIP & BILLING</p>
          <Button
            variant="secondary"
            className="rounded-0 border-dark border-2 border-top-0 border-end-0 border-start-0 text-black"
          >
            Cancel Membership
          </Button>
        </Col>

        {/* PRIMA RIGA */}
        <Col xs={12} lg={9}>
          <Row>
            <Col xs={6}>
              <p className="fw-bold mb-1">student@strive.school</p>
              <p className="text-secondary mb-1">Password: ********</p>
              <p className="text-secondary mb-0">Phone: 321 044 1279</p>
            </Col>
            <Col xs={6} className="text-end">
              <a className="text-decoration-none d-block mb-1" href="#">
                Change account email
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Change Password
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Change phone number
              </a>
            </Col>
            <hr
              className="border-0 bg-secondary mt-2 mb-4"
              style={{ height: "2px" }}
            />
          </Row>

          {/* SECONDA RIGA */}
          <Row>
            <Col xs={6}>
              <i className="bi bi-paypal me-3">
                <span className="fw-bold ms-1">PayPal</span>
              </i>
              <p className="fw-bold d-md-inline">admin@strive.school</p>
            </Col>
            <Col xs={6} className="text-end">
              <a className="text-decoration-none d-block mb-1" href="#">
                Update payment info
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Billing deteails
              </a>
            </Col>
            <hr
              className="border-0 bg-secondary mt-2 mb-4"
              style={{ height: "2px" }}
            />
          </Row>

          {/* TERZA RIGA */}
          <Row>
            <Col xs={6}></Col>
            <Col xs={6} className="text-end">
              <a className="text-decoration-none d-block mb-1" href="#">
                Redeem gift card or promo code
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Where to buy gift cards
              </a>
            </Col>
          </Row>
        </Col>
        <hr
          className="border-0 bg-secondary mt-2 mb-4"
          style={{ height: "2px" }}
        />
      </Row>

      {/* QUARTA RIGA */}
      <Row>
        <Col xs={3}>
          <p className="text-secondary">PLAN DETAILS</p>
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs={6}>
              <p className="fw-bold d-md-inline mb-0">Premium</p>
              <span className="fw-light border border-2 border-secondary p-1 ms-md-2">
                ULTRA <span className="fw-bold">HD</span>
              </span>
            </Col>
            <Col xs={6} className="text-end">
              <a className="text-decoration-none d-block mb-1" href="#">
                Change plan
              </a>
            </Col>
          </Row>
        </Col>
        <hr
          className="border-0 bg-secondary mt-2 mb-4"
          style={{ height: "2px" }}
        />
      </Row>

      {/* QUINTA RIGA */}
      <Row>
        <Col xs={3}>
          <p className="text-secondary">SETTINGS</p>
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs={6}>
              <a className="text-decoration-none d-block mb-1" href="#">
                Parental controls
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Test partecipation
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Manage download devices
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Activate a device
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Recent device streaming activity
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Sign out of all devices
              </a>
            </Col>
            <Col xs={6}></Col>
          </Row>
        </Col>
        <hr
          className="border-0 bg-secondary mt-2 mb-4"
          style={{ height: "2px" }}
        />
      </Row>

      {/* SESTA RIGA */}
      <Row>
        <Col xs={3}>
          <p className="text-secondary">MY PROFILE</p>
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs={6}>
              <Image src={avatar} style={{ width: "35px" }} />
              <p className="ms-sm-2 fw-bold d-sm-inline">Strive Student</p>
            </Col>
            <Col xs={6} className="text-end">
              <a className="text-decoration-none d-block mb-1" href="#">
                Mange profiles
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Add profile email
              </a>
            </Col>
          </Row>

          {/* SETTIMA RIGA */}
          <Row>
            <Col xs={6}>
              <a className="text-decoration-none d-block mb-1" href="#">
                Language
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Playback settings
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Subtitle appearance
              </a>
            </Col>
            <Col xs={6} className="text-end text-lg-start">
              <a className="text-decoration-none d-block mb-1" href="#">
                Viewing activity
              </a>
              <a className="text-decoration-none d-block mb-1" href="#">
                Ratings
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Settings
