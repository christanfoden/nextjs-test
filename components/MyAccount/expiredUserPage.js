import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const ExpiredUserLanding = ({ currentUser, primaries }) => {
  if (currentUser.uid === null) {
    return <Redirect to="/" />;
  }
  return (
    <div style={styles.textStyle}>
      <div style={{ backgroundColor: "white", padding: 50, color: "#404040" }}>
        <h1>Hello </h1>
        <h1>{currentUser.displayName || "New User"}</h1>
      </div>
      <p style={styles.textStyle}>Your account has now expired 😥</p>
      <h4 style={styles.textStyle}>
        Please email{" "}
        <a
          href={`mailto:${primaries.appEmail}?subject=Expired User Inquiry`}
          rel="noopener noreferrer"
        >
          {primaries.appEmail}
        </a>{" "}
        to discover subscription options available to you.
      </h4>
    </div>
  );
};

const styles = {
  textStyle: {
    textAlign: "center",
    margin: 0,
    marginTop: 50
  },
  divStyle: {
    height: 3,
    backgroundImage: "linear-gradient(to right, #FFDF00, #F63800, #6400B5)"
  }
};

const mapStateToProps = state => ({
  primaries: state.appConfig.appPrimaries,
  currentUser: state.user.currentUserProps
});

export default connect(mapStateToProps)(ExpiredUserLanding);
