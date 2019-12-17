import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Profile from "./Profile";
import {
  getCategories,
  getParentCategories,
  getIndustries
} from "../../actions/configActions";
import { getAllMyInsights } from "../../actions/insights";

import { DashboardLayout } from "../../layouts/";

const MyAccount = ({ currentUser, authUser }) => {
  const userType = currentUser && currentUser.userType;
  useEffect(() => {
    if (authUser && authUser.uid) {
      getAllMyInsights(authUser.uid);
      getCategories();
      getParentCategories();
      getIndustries();
    }
  }, []);

  if (userType === "newUser") return <Redirect to="/NewUser" />;
  if (userType === "expiredUser") return <Redirect to="/ExpiredUser" />;
  if (authUser === null) return <Redirect to="/" />;

  return (
    <div>
      <Profile />
    </div>
  );
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  currentUser: state.user.currentUserProps,
  currentAllInsights: state.insights.currentAllInsightsProps,
  myInsights: state.insights.myInsightsProps
});

export default connect(mapStateToProps)(MyAccount);
