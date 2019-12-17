import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/users";

import { Divider } from "semantic-ui-react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: { display: "flex" },
  grid: { position: "relative", padding: theme.spacing(4) },
  formField: { width: "100%" },
  formFieldBio: { width: "100%" },
  button: { outline: "none !important" },
  error: { color: "red", padding: theme.spacing(2) }
}));

const DangerZone = props => {
  const classes = useStyles();
  const [showDangerZone, setShowDangerZone] = useState(false);

  const deleteUserProfileForever = () => {
    deleteUser(props.authUser.uid);
  };

  return (
    <Fragment>
      <Divider horizontal>Danger Zone</Divider>
      <Grid container direction="column" alignItems="center">
        {showDangerZone === false && (
          <Button
            color="secondary"
            className={classes.button}
            onClick={() => setShowDangerZone(!showDangerZone)}
          >
            Delete Profile
          </Button>
        )}

        {showDangerZone === true && (
          <Fragment>
            <Typography align="center" className={classes.error}>
              Warning: This will erase your profile completely. With no way to
              recover.
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              className={classes.button}
              onClick={() => deleteUserProfileForever()}
            >
              Delete Profile Forever
            </Button>
            <Button
              color="primary"
              className={classes.button}
              onClick={() => setShowDangerZone(!showDangerZone)}
            >
              Close
            </Button>
          </Fragment>
        )}
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUserProps,
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(DangerZone);
