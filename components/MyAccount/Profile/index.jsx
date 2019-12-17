import React, { useState, useEffect } from "react";
import compose from "recompose/compose";
import { auth } from "../../../FireBase/index";

import { connect, useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { Card, Image, Icon, Container } from "semantic-ui-react";
import ProfileForm from "../ProfileForm";
import DangerZone from "../dangerZone";
import { InsightsComponent } from "../../Insights/";
import { styles } from "../../../styles";
import { updateUserProfilePic } from "../../../actions/users";
import {
  createNotification,
  NOTIFICATION_TYPE_SUCCESS
} from "react-redux-notify";
import Notifications from "../Notifications";

// Material-ui
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Calendar from "../../Calendar";
import Dashboard from "../Dashboard";
import Chatrooms from "../../Forum/Chatrooms";
import MyLegalRegisterPage from "../../LegalRegister";
import Rating from "@material-ui/lab/Rating";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";

import MuiStyles from "./styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const mySuccessNotification = {
  message: "Profile Picture Updated",
  type: NOTIFICATION_TYPE_SUCCESS,
  duration: 3000,
  canDismiss: true,
  icon: <Icon name="check" />
};

const Profile = props => {
  const { classes } = props;
  const desktop = useMediaQuery("(min-width:1024px)");
  const navItem = useSelector(state => state.appConfig.mobileNav);
  const dispatch = useDispatch();
  const { currentUser, authUser } = props;
  const [showDangerZone, setShowDangerZone] = useState(false);
  const [active, setActive] = useState(menu[0]);
  const [drawer, setDrawer] = useState(false);
  const [state, setState] = useState({
    editProfile: false,
    manageNotifications: false,
    insights: false,
    calendar: false,
    dashboard: false,
    errors: "",
    currentProfilePhoto: currentUser.profilePhoto || "",
    selectedProfilePhoto: ""
  });

  const [value, setValue] = React.useState(2);

  const toggle = name => {
    setActive(name);
  };

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch({ type: "MOBILE_NAV", payload: !navItem });
  };

  const renderName = () => {
    if (currentUser && currentUser.firstName && currentUser.lastName) {
      return (
        <Typography className={classes.title}>
          {currentUser.firstName} {currentUser.lastName}
        </Typography>
      );
    } else if (currentUser && currentUser.displayName) {
      return (
        <Typography className={classes.title}>
          {currentUser.displayName}
        </Typography>
      );
    } else {
      return (
        <Typography className={classes.titleEmail}>
          {currentUser && currentUser.email}
        </Typography>
      );
    }
  };

  const handleImageSelect = e => {
    // if file is greater than 2mb
    if (e.target.files[0] && e.target.files[0].size > 2000000) {
      return setState({
        ...state,
        errors: "File size is too big! Maximum 2mb"
      });
    }

    // if file is less than 5kb
    if (e.target.files[0] && e.target.files[0].size < 5000) {
      return setState({
        ...state,
        errors: "File size is too small! Minimum 5kb"
      });
    }

    setState({
      ...state,
      selectedProfilePhoto: e.target.files[0] ? e.target.files[0] : null,
      errors: ""
    });
  };

  useEffect(() => {
    if (
      currentUser.firstName === "" &&
      currentUser.lastName === "" &&
      currentUser.displayName === ""
    ) {
      setActive("profile");
    }
  }, []);

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {sideMenu}
    </div>
  );

  const sideMenu = (
    <div style={{ textAlign: "center", position: "relative" }}>
      <div className={classes.profile}>
        {currentUser && !currentUser.profilePhoto ? (
          <Icon
            name="user circle"
            size="huge"
            style={{
              color: "grey"
            }}
          />
        ) : (
          <Image
            src={currentUser && currentUser.profilePhoto}
            size="small"
            circular
          />
        )}

        <label htmlFor="profilePhoto">
          <Fab
            component="span"
            color="primary"
            aria-label="add"
            size="small"
            className={classes.fab}
          >
            <EditIcon />
            <input
              type="file"
              name="profilePhoto"
              id="profilePhoto"
              style={{ display: "none" }}
              onChange={handleImageSelect}
            />
          </Fab>
        </label>

        {renderName()}

        <Typography className={classes.subtitle}>
          {currentUser && currentUser.company}
        </Typography>

        <Rating
          name="simple-controlled"
          value={value}
          // readOnly
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />

        {state.selectedProfilePhoto && (
          <div>
            {state.selectedProfilePhoto && !state.errors && (
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => {
                  updateUserProfilePic(
                    currentUser && currentUser.uid,
                    state.selectedProfilePhoto
                  );
                  props.createNotification(mySuccessNotification);
                  setState({
                    ...state,
                    errors: "",
                    selectedProfilePhoto: ""
                  });
                }}
              >
                Save <CloudUploadIcon style={{ marginLeft: 5 }} />
              </Button>
            )}{" "}
            <Typography style={{ color: "green", padding: 5, fontWeight: 600 }}>
              {state.selectedProfilePhoto.name}
            </Typography>
          </div>
        )}
      </div>

      <p style={{ color: "red" }}>{state.errors}</p>

      <Grid container direction="column">
        {menu.map((item, idx) => {
          if (item !== "empty") {
            return (
              <Button
                key={idx}
                variant={active === item ? "contained" : "text"}
                color={item === "dangerzone" ? "secondary" : null}
                className={classes.button}
                onClick={() => toggle(item)}
              >
                {item}
                {currentUser &&
                  currentUser.badges &&
                  currentUser.badges[item] && (
                    <Badge
                      color="secondary"
                      badgeContent={currentUser.badges[item].no}
                      className={classes.badge}
                    />
                  )}
              </Button>
            );
          }
        })}
      </Grid>

      {!desktop && (
        <Grid item>
          <hr />
          {/* <NavItem style={classes.navItemStyle} tag={Link} to="/"> */}
          <Button
            fullWidth
            // variant="contained"
            margin="dense"
            onClick={() => auth.doSignOut()}
            // className={classes.button}
          >
            Sign Out
            <ExitToAppIcon className={classes.rightIcon} />
          </Button>
          {/* </NavItem> */}
        </Grid>
      )}
    </div>
  );
  return (
    <Container className={classes.root}>
      {/* <Grid container direction="column" style={{ height: "100%" }}>
        <Grid item>1</Grid>
        <Grid item>2</Grid>
        <Grid item>3</Grid>
      </Grid> */}

      <Drawer open={navItem} onClose={toggleDrawer("left", false)}>
        {sideList()}
      </Drawer>

      <Row
        style={{
          padding: 15,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row"
        }}
      >
        {desktop && (
          <Col sm="3" style={{ paddingBottom: 15, background: "" }}>
            {sideMenu}
          </Col>
        )}

        <Col
          sm={desktop ? "9" : "12"}
          style={{
            position: "relative"
            // overflowX: "hidden"
          }}
        >
          {active === "dashboard" && <Dashboard />}
          {active === "insights" && <InsightsComponent />}
          {active === "forum" && <Chatrooms />}
          {active === "calendar" && <Calendar />}
          {active === "legalregister" && <MyLegalRegisterPage />}
          {active === "university" && "university"}
          {active === "profile" && <ProfileForm />}
          {active === "notifications" && <Notifications />}
          {active === "dangerzone" && <DangerZone />}
        </Col>
      </Row>
    </Container>
  );
};

const validate = (string, envVar) => {
  if (process.env[envVar] !== "true") string = "empty";
  return string;
};

const menu = [
  validate("insights", "REACT_APP_INSIGHTS_FEATURE"),
  validate("forum", "REACT_APP_FORUM_FEATURE"),
  validate("calendar", "REACT_APP_CALENDAR_FEATURE"),
  validate("legalRegister", "REACT_APP_LEGAL_REGISTER_FEATURE"),
  validate("university", "REACT_APP_UNIVERSITY_FEATURE"),
  "profile",
  "notifications",
  "dangerzone"
];

const mapStateToProps = state => ({
  currentUser: state.user.currentUserProps,
  authUser: state.sessionState.authUser
});

const mapDispatchToProps = dispatch => ({
  createNotification: config => {
    dispatch(createNotification(config));
  }
});

const enhance = compose(
  withStyles(MuiStyles),
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Profile);

/* <Segment.Group>
  <Segment inverted size="tiny" style={{ backgroundColor: "#404040" }}>
    Private Information
  </Segment>
  <Segment>
    <Card.Description style={styles.textElementStyle}>
      <span>
        <strong>Email address:</strong> {authUser.email}
      </span>
    </Card.Description>
    <Card.Description style={styles.textElementStyle}>
      <span>
        <strong>Membership expiry: </strong>
        <TimeAgo date={currentUser && currentUser.expiryDate} />
      </span>
    </Card.Description>
  </Segment>
</Segment.Group>; */
