import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

// Notifications
import {
  createNotification,
  NOTIFICATION_TYPE_WARNING
} from "react-redux-notify";

//  Material-ui
import Button from "@material-ui/core/Button";
import BackIcon from "@material-ui/icons/ArrowBackIos";

// const ContainerST = styled.div`
//     position: absolute;
//     background-color: red;
//     width: 100%;
//     height 125px;
//     margin-top: 0;
// `;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(186px, 1fr));
`;
const GridItem = styled.div`
  // border-style: solid;
  // border-width: 1px;
  margin: 3px;
  padding: 10px;
  box-shadow: 3px 3px 10px -1px rgba(0, 0, 0, 0.43);
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  :hover {
    // background-color: grey;
    border-color: white;
    box-shadow: inset 3px 3px 10px -1px rgba(0, 0, 0, 0.43);
  }
`;
const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
`;
const GridTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, auto minmax(186px, 1fr));
  // grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
`;

// needs to accept props by selecting a profile name, lets try from the chatrooms first.
// props need to be from a SelectedUser reducer in the state.

const PublicProfile = ({ selectedUser, history, createNotification }) => {
  // TODO
  // Think about creating a unique user URL so that profiles can be accessed from outside authentication?
  // And use DB rules for security

  const visible = process.env.REACT_APP_PROFILES_FEATURE;

  console.log(visible);

  // If feature is true show component else redirect to myaccount
  if (visible === "false") {
    console.log("The feature is forbidden");
    history.goBack();
    return <div />;
  }

  if (selectedUser === null) {
    // Send notification saying user has deleted profile or something like that
    createNotification({
      message: "User Has been deleted from the system!",
      type: NOTIFICATION_TYPE_WARNING,
      duration: 3000,
      canDismiss: true,
      icon: <Icon name="warning sign" />
    });

    history.goBack();
    return <div />;
  }

  const ObjectisNotEmpty = Object.values(selectedUser).length < 1;

  if (ObjectisNotEmpty === true) {
    return (
      <Dimmer inverted active>
        <Loader size="large">
          Loading...{" "}
          <p>
            If taking a while, take me ... <Link to="/myaccount">Home</Link>
          </p>
        </Loader>
      </Dimmer>
    );
  }

  return (
    <div style={{ marginTop: 0, backgroundColor: "" }}>
      {/* <ContainerST /> */}
      <Container style={{ padding: 0 }}>
        <Row>
          <Button onClick={() => history.goBack()} style={{ marginTop: 10 }}>
            <BackIcon />
            Back
          </Button>
        </Row>
        <Row style={{ padding: 0, margin: 0, paddingTop: 25 }}>
          <Col style={{ margin: 0 }}>
            <GridTop>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: 175, height: 175 }}>
                  <img
                    src={selectedUser.profilePhoto}
                    alt="user"
                    style={{
                      borderRadius: "100%",
                      height: "100%",
                      width: "100%"
                    }}
                  />
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <h1
                  style={{
                    fontFamily: "Avenir next",
                    fontWeight: 100,
                    marginBottom: 0
                  }}
                >
                  {selectedUser.displayName}
                </h1>
                <p>{selectedUser.company}</p>
              </div>
            </GridTop>
          </Col>
        </Row>
        <Row style={{ paddingTop: 25 }}>
          <Col style={{ margin: 0 }}>
            <Grid>
              <GridItem>
                <Title>Job Role</Title>
                <p>{selectedUser.jobRole}</p>
              </GridItem>
              <GridItem>
                <Title>User Type</Title>
                <p>{selectedUser.userType}</p>
              </GridItem>
              <GridItem>
                <Title>Saved Insights</Title>
                <p>{Object.keys(selectedUser.wishlist).length}</p>
              </GridItem>
            </Grid>
          </Col>
        </Row>
        <Row>
          <Col style={{ margin: 0 }}>
            <GridItem>
              <Title>Bio</Title>
              <p>{selectedUser.bio}</p>
            </GridItem>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedUser: state.user.selectedUser
});

const mapDispatchToProps = dispatch => ({
  getUserProfile: uid => {}, // TODO
  createNotification: config => {
    dispatch(createNotification(config));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicProfile);
