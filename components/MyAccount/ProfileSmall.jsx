import React from "react";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import { styles } from "../../styles";
import { Col } from "reactstrap";
import Avatar from "@material-ui/core/Avatar";

// Material ui
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  icon: { color: "grey" },
  label: { marginLeft: "-14px !important", marginTop: "5px !important" },
  co: {
    textAlign: "left",
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    background: theme.palette.background.default
  },
  left: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {},
  subtitle: { color: theme.palette.grey[500] },
  avatar: { margin: theme.spacing(1) }
}));

const ProfileSmall = ({ currentUser }) => {
  const classes = useStyles();
  return (
    <div className="animated bounceInLeft" style={styles.profileComponentStyle}>
      <div style={styles.divStyle} />
      <Col className={classes.left}>
        {!currentUser.profilePhoto ? (
          <Icon name="user circle" size="huge" className={classes.icon} />
        ) : (
          <Avatar src={currentUser.profilePhoto} className={classes.avatar} />
        )}

        <div className={classes.co}>
          <Typography variant="h6">{currentUser.displayName}</Typography>
          <Typography variant="body1" className={classes.subtitle}>
            {currentUser.company}
          </Typography>
        </div>
      </Col>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUserProps
});

export default connect(mapStateToProps)(ProfileSmall);
