import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const NewUserLanding = ({ currentUser, primaries }) => {
  if (currentUser.uid === null) return <Redirect to="/" />;
  return (
    <div style={styles.textStyle}>
      <div style={{ backgroundColor: "white", padding: 50, color: "#404040" }}>
        <h1>Welcome </h1>
        <h1>{currentUser.displayName || "New User"}</h1>
      </div>
      <p style={styles.textStyle}>{primaries.appNewUserMessage}</p>
      <h4 style={styles.textStyle}>
        Please email{" "}
        <a
          href={`mailto:${primaries.appEmail}?subject=New User Awaiting Access`}
          rel="noopener noreferrer"
        >
          {primaries.appEmail}
        </a>{" "}
        to inquire
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
  currentUser: state.user.currentUserProps,
  primaries: state.appConfig.appPrimaries
});

export default connect(mapStateToProps)(NewUserLanding);
