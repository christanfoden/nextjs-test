import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getLatestLegalItems, setLegalItem } from "../../actions/legalRegister";
import { Card } from "semantic-ui-react";
import { styles } from "../../styles";
import LegalItemModal from "../Modals/LegalItemModal";
import { renderFlag } from "../LegalRegister/flag";

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
      opacity: 0.5,
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
    color: "#000",
    background: "rgba(255, 255, 255, 0.9)",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius
  },
  itemSubtitle: { fontWeight: 100 }
}));

const LegalRegister = ({ legalRegisterItems }) => {
  const classes = useStyles();

  const [state, setState] = useState({
    modal: false
  });

  const toggle = key => {
    // eslint-disable-next-line
    if (typeof key == "string") {
      setLegalItem(key);
    }
    setState({ ...state, modal: !state.modal });
  };

  useEffect(() => {
    getLatestLegalItems();
  }, []);

  return (
    <Card color="teal" fluid style={styles.profileComponentStyle}>
      <Card.Content style={styles.cardContentStyle}>
        <Typography variant="h6" className={classes.title} align="left">
          Latest Legal Items
        </Typography>
        <div style={styles.divStyleLeftbox} />
        <Grid container justify="center" spacing={5} className={classes.grid}>
          {Object.values(legalRegisterItems).map((item, idx) => (
            <Fragment key={idx}>
              <Grid
                item
                md={6}
                className={classes.item}
                onClick={() => toggle(item.key)}
                key={idx}
              >
                <Typography variant="h6" className={classes.itemTitle}>
                  {item.title}
                </Typography>
                <Typography variant="body1" className={classes.itemSubtitle}>
                  {item.filterByArea}
                </Typography>
                {item.country &&
                  item.country.map((flag, i) => {
                    return renderFlag(flag, i);
                  })}
              </Grid>
            </Fragment>
          ))}
        </Grid>

        {state.modal && <LegalItemModal modal={state.modal} toggle={toggle} />}
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => ({
  legalRegisterItems: state.legalItems.latestLegalItems
});

export default connect(mapStateToProps)(LegalRegister);
