import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { styles } from "../../styles";
import { getLatestInsights, setInsight } from "../../actions/insights";
import InsightModal from "../Insights/InsightModal";
import SubscribeModal from "../Insights/SubscribeModal";
import InsightListItem from "../Insights/InsightListItem";

// Material UI
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  title: { padding: theme.spacing(4) },
  grid: { padding: theme.spacing(4) },
  item: {
    position: "relative",
    zIndex: 0,
    borderRadius: 4,
    "&:hover": {
      opacity: 1,
      boxShadow: theme.boxShadow
    }
  },
  img: {
    zIndex: -1,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: theme.shape.borderRadius,
    objectFit: "cover"
  },
  itemTitle: {
    fontWeight: 500,
    padding: theme.spacing(2),
    color: "#000",
    background: "rgba(255, 255, 255, 0.9)",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    "&:hover": {
      color: "transparent",
      background: "transparent"
    }
  },
  itemSubtitle: { fontWeight: 100 }
}));

const LatestInsights = ({ latestInsightsList, currentUser }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    modal: false
  });

  const toggle = key => {
    // eslint-disable-next-line
    if (typeof key == "string") {
      setInsight(key, currentUser);
    }
    setState({ ...state, modal: !state.modal });
  };

  useEffect(() => {
    getLatestInsights();
  }, []);

  return (
    <Card fluid style={styles.profileComponentStyle}>
      <Card.Content style={styles.cardContentStyle}>
        <Typography variant="h6" className={classes.title} align="left">
          Latest Insights
        </Typography>
        <div style={styles.divStyleLeftbox} />

        {open && (
          <InsightModal
            tags={state.tags}
            modal={open}
            toggle={() => setOpen(!open)}
          />
        )}

        {!open && (
          <Grid container justify="center" spacing={5} className={classes.grid}>
            {Object.values(latestInsightsList).map((insight, idx) => (
              <InsightListItem
                data={insight}
                key={idx}
                toggle={() => setOpen(!open)}
                // favs={favs}
              />
            ))}
          </Grid>
        )}
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => ({
  latestInsightsList: state.insights.latestInsights,
  currentUser: state.user.currentUserProps
});

export default connect(mapStateToProps)(LatestInsights);

// currentUser.userType === "guest" ? (
//   <SubscribeModal buttonLabel="Subscribe" />
// ) : (
//   <InsightModal modal={state.modal} toggle={toggle} />
// );
