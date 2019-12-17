import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import WishList from "../Insights/WishList";
import { Message } from "semantic-ui-react";
import { Container, Row, Col } from "reactstrap";
import { getAllInsights, getAllMyInsights } from "../../actions/insights";
import Profile from "./Profile";
import ScrollAnimation from "react-animate-on-scroll";

class Account extends Component {
  componentDidMount() {
    if (this.props.authUser === null) {
      return <Redirect to="/" />;
    }
    getAllInsights();
  }

  render() {
    if (this.props.authUser === null) {
      return <Redirect to="/" />;
    }
    if (this.props.authUser) {
      getAllMyInsights(this.props.authUser.uid);
    }
    return (
      <div style={{ paddingBottom: 25 }}>
        <Container fluid>
          <Row>
            <Col>
              <ScrollAnimation animateIn="shake" offset={1}>
                <Message
                  style={{ background: "transparent", boxShadow: "none" }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      color: "#404040",
                      paddingTop: 15
                    }}
                  >
                    This is your account page. Below are your +added insights
                    <br />
                    Click `select >` to see more detail and `x remove` to remove
                    from your added insights.
                  </p>
                </Message>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Profile />
            </Col>
            <Col md="6">
              <WishList header={"MY INSIGHTS"} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  currentUser: state.user.currentUserProps,
  currentAllInsights: state.insights.currentAllInsightsProps
});

export default connect(mapStateToProps)(Account);
