import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Segment, List } from "semantic-ui-react";
import { styles } from "../../styles";
import {
  getLatestForumActivity,
  getAllChatrooms,
  setCurrentChatroom
} from "../../actions/Posts";
import { selectUserAction } from "../../actions/users";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";

// Material-UI
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  title: { padding: theme.spacing(4) },
  avatar: { height: 16, width: 16, marginRight: theme.spacing(1) },
  avaItem: { display: "flex", flexDirection: "row" }
}));

const LatestForum = ({ latestPostsList }) => {
  const classes = useStyles();
  const handleSelectClick = key => {
    setCurrentChatroom(key);
  };

  const selectUser = uid => {
    selectUserAction(uid);
  };

  useEffect(() => {
    getLatestForumActivity();
    getAllChatrooms();
  }, []);

  return (
    <Card color="teal" fluid style={styles.profileComponentStyle}>
      <Card.Content style={styles.cardContentStyle}>
        <Typography variant="h6" className={classes.title} align="left">
          Latest Posts
        </Typography>
        <div style={styles.divStyleRightbox} />
        <Segment style={styles.segmentStyle}>
          <List divided verticalAlign="middle">
            {Object.values(latestPostsList).map((post, idx) => (
              <List.Item key={idx}>
                <Grid container>
                  <Grid item sm={3} className={classes.avaItem}>
                    {!post.profilePicture ? (
                      <Avatar
                        src={post.profilePhoto}
                        className={classes.avatar}
                      />
                    ) : null}

                    {post.displayName ? (
                      <Link
                        onClick={() => selectUser(post.uid)}
                        to={`/Profile/${post.displayName}`}
                      >
                        {post.displayName}
                      </Link>
                    ) : null}
                  </Grid>

                  <Grid item sm={4}>
                    <Link
                      to="/Forum"
                      onClick={() => handleSelectClick(post.chatroomKey)}
                    >
                      {post.chatroomTitle}
                    </Link>
                  </Grid>
                  <Grid item sm={2} align="right">
                    <TimeAgo date={post.time} style={{ textAlign: "right" }} />
                  </Grid>
                  <Grid item sm={3} align="right">
                    {post.likeCount} Likes
                  </Grid>
                </Grid>

                {/* If posts.key matches a key from this.props.AllChatrooms 
          then callhandleSelectClick with this.props.Allchatrooms.key */}
              </List.Item>
            ))}
          </List>
        </Segment>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => ({
  latestPostsList: state.postState.latestPosts,
  AllChatrooms: state.chatroomsState.currentAllChatroomsProps
});

export default connect(mapStateToProps)(LatestForum);
