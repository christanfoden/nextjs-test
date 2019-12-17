import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Divider } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { firebase } from "../../../FireBase/firebase";
import ResponsiveDialog from "../../Dialogue";

//  Notifications
import { createNotification } from "react-redux-notify";

// Material-ui
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { DatePicker } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: { display: "flex", background: "", width: "100%" },
  grid: { position: "relative", padding: theme.spacing(4) },
  formField: { width: "100%" },
  button: { outline: "none !important" },
  error: { color: "red", padding: theme.spacing(2) }
}));

const ProfileForm = props => {
  const classes = useStyles();
  const { DOB } = props.currentUser;
  const [tips, setTips] = useState(false);
  const [state, setState] = useState({
    displayName: props.currentUser.displayName || "",
    firstName: props.currentUser.firstName || "",
    lastName: props.currentUser.lastName || "",
    company: props.currentUser.company || "",
    jobRole: props.currentUser.jobRole || "",
    bio: props.currentUser.bio || "",
    profilePhoto: props.currentUser.profilePhoto || "",
    DOB: DOB ? new Date(DOB) : new Date(),
    errors: ""
  });
  const handleChange = name => event => {
    firebase
      .database()
      .ref(`/users/${props.authUser.uid}`)
      .update({ [name]: event.target.value });
    setState({ ...state, [name]: event.target.value });
  };
  const handleDateChange = name => event => {
    firebase
      .database()
      .ref(`/users/${props.authUser.uid}`)
      .update({ [name]: event.format() });
    setState({ ...state, [name]: event });
  };

  useEffect(() => {
    if (
      props.currentUser.firstName === "" &&
      props.currentUser.lastName === "" &&
      props.currentUser.displayName === ""
    ) {
      setTips(true);
    }
  }, []);

  return (
    <Fragment>
      <Divider horizontal>Edit Profile</Divider>
      <div className={classes.root}>
        <Grid container spacing={1} direction="column" className={classes.grid}>
          <Grid item>
            <TextField
              value={state.displayName}
              className={classes.formField}
              variant="outlined"
              margin="dense"
              label="Display/Author Name"
              onChange={handleChange("displayName")}
            />
          </Grid>
          <Grid item>
            <TextField
              value={state.firstName}
              className={classes.formField}
              variant="outlined"
              margin="dense"
              label="First Name"
              onChange={handleChange("firstName")}
            />
          </Grid>
          <Grid item>
            <TextField
              value={state.lastName}
              className={classes.formField}
              variant="outlined"
              margin="dense"
              label="Last Name"
              onChange={handleChange("lastName")}
            />
          </Grid>
          <Grid item>
            <TextField
              value={state.company}
              className={classes.formField}
              variant="outlined"
              margin="dense"
              label="Company"
              onChange={handleChange("company")}
            />
          </Grid>
          <Grid item>
            <TextField
              value={state.jobRole}
              className={classes.formField}
              variant="outlined"
              margin="dense"
              label="Job Role"
              onChange={handleChange("jobRole")}
            />
          </Grid>
          <Grid item>
            <DatePicker
              disableFuture
              openTo="year"
              label="Date of birth"
              className={classes.formField}
              value={state.DOB}
              onChange={handleDateChange("DOB")}
              inputVariant="outlined"
              margin="dense"
            />
          </Grid>
        </Grid>

        <Grid container direction="column" spacing={1} className={classes.grid}>
          <Grid item>
            <TextField
              value={state.bio}
              multiline
              rows="8"
              className={classes.formField}
              variant="outlined"
              margin="dense"
              label="Bio"
              onChange={handleChange("bio")}
            />
          </Grid>

          <Grid item>Email: {props.authUser.email}</Grid>
          <Button>Change Email</Button>

          <Button>Change Password</Button>

          <Grid item>Verified: {`${props.authUser.emailVerified}`}</Grid>

          <Button>Verify your account for security</Button>
          {console.log(props.authUser)}
        </Grid>
      </div>

      <ResponsiveDialog
        open={tips}
        setOpen={() => setTips(!tips)}
        title={`Welcome to ${props.primaries.appTitle}`}
        content="Add some basic information to your profile so that you can interact with others."
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUserProps,
  authUser: state.sessionState.authUser,
  primaries: state.appConfig.appPrimaries
});

const mapDispatchToProps = dispatch => ({
  createNotification: config => {
    dispatch(createNotification(config));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileForm)
);
