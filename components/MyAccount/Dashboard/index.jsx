import React, { Fragment } from "react";
import { Container, Col, Row } from "reactstrap";

import NewsTicker from "../../NewsTicker";
import LatestInsights from "../latestInsights";
import LatestForum from "../latestForumActivity";
import LatestLegalRegister from "../latestLegalRegister";
import ProfileSmall from "../ProfileSmall";
// import Messages from "./messages";

// Material-ui
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(1)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <Container className={classes.root}> */}
      {/* <Row>
        <Col sm="3"> */}
      {/* <ProfileSmall /> */}
      {/* </Col> */}
      {/* </Row> */}
      <Row>
        <Col sm="6">
          <LatestInsights />
        </Col>
        <Col sm="6">
          <Row>
            <LatestForum />
          </Row>
          <Row>
            <LatestLegalRegister />
          </Row>
        </Col>
      </Row>
      {/* <NewsTicker /> */}
      {/* </Container> */}
    </Fragment>
  );
};

export default Dashboard;
