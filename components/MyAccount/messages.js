import React, { Component } from "react";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import { getDashboardMessage } from "../../actions/configActions";

class Messages extends Component {
  state = { visible: true };

  handleDismiss = () => {
    this.setState({ visible: false });

    setTimeout(() => {
      this.setState({ visible: true });
    }, 20000);
  };

  componentDidMount = () => {
    getDashboardMessage();
  };

  render() {
    const { dashboardMessage } = this.props;
    const ObjectIsEmpty = Object.values(dashboardMessage).length > 1;
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          content={
            ObjectIsEmpty && (
              <MegadraftEditor
                editorState={editorStateFromRaw(JSON.parse(dashboardMessage))}
                readOnly={true}
              />
            )
          }
          floating
          info
        />
      );
    }

    return "";
  }
}

const mapStateToProps = state => ({
  dashboardMessage: state.appConfig.dashboardMessage
});

export default connect(mapStateToProps)(Messages);
