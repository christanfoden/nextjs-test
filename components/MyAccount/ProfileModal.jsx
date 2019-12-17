import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { firebase } from "../../FireBase/firebase";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import TimeAgo from "react-timeago";

import { Image } from "semantic-ui-react";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  },
  title: { fontSize: 30, fontWeight: 500, lineHeight: 1, paddingTop: 15 },
  subtitle: {
    fontSize: 15,
    fontWeight: 200,
    lineHeight: 1,
    padding: theme.spacing(2),
    color: "grey"
  },
  time: { color: "lightgrey", fontSize: 10, margin: 0, padding: 0 }
}));

export const ProfileModal = ({ uid }) => {
  const classes = useStyles();
  const [value] = useState(2);
  const [user, setUser] = useState();

  useEffect(() => {
    const ref = firebase.database().ref(`users/${uid}`);
    ref.once("value", snap => setUser(snap.val()));
  }, []);

  console.log(user);

  return (
    <div className={classes.paper}>
      {user && (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Image src={user.profilePhoto} size="small" circular />
          </Grid>
          <Grid item>
            <Typography className={classes.title}>
              {user.displayName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.subtitle}>{user.company}</Typography>
          </Grid>
          <Grid item>
            <Rating value={value} readOnly />
          </Grid>
          <Grid item>
            <Typography className={classes.time}>
              Joined <TimeAgo date={user.signUp} />
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
