import React from "react";
import { connect } from "react-redux";
import { Checkbox, Divider } from "semantic-ui-react";
import {
  updateUserChatroomNotifications,
  updateUserInsightNotifications
} from "../../actions/subscribers";
import { Row, Col } from "reactstrap";

const Notifications = ({ currentUser, currentUser: { notifications } }) => {
  return (
    <div>
      <Divider horizontal>Manage Notifications</Divider>
      <h3>Chatrooms:</h3>
      {/* {Object.entries turns each chatroom into an array with the first item [0] being the key and the second item [1] being an object containing the subscribed node etc. All of these chatroom array are contained within an outer array. [[chatroom key,{chatroom object}], [chatroom key,{chatroom object}]]   */}
      <Row style={{ padding: 20 }}>
        {notifications &&
          notifications.chatrooms &&
          Object.entries(notifications.chatrooms).map((chatroom, idx) => {
            return (
              <Col sm="4" key={idx}>
                <div>
                  <p style={{ marginBottom: 15 }}>
                    {chatroom[1].chatroomTitle}
                  </p>
                  <Checkbox
                    toggle
                    checked={chatroom[1].subscribed}
                    onChange={() => {
                      updateUserChatroomNotifications(
                        chatroom[0],
                        currentUser.uid,
                        !chatroom[1].subscribed
                      );
                    }}
                  />
                </div>
              </Col>
            );
          })}
      </Row>
      <hr />
      <h3>Insights:</h3>
      <Row style={{ padding: 20 }}>
        {notifications &&
          notifications.insights &&
          Object.entries(notifications.insights).map((insight, idx) => {
            return (
              <Col sm="4" key={idx}>
                <div>
                  <p style={{ marginBottom: 15 }}>{insight[1].insightTitle}</p>
                  <Checkbox
                    toggle
                    checked={insight[1].subscribed}
                    onChange={() => {
                      updateUserInsightNotifications(
                        insight[0],
                        currentUser.uid,
                        !insight[1].subscribed
                      );
                    }}
                  />
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUserProps
});

export default connect(mapStateToProps)(Notifications);
