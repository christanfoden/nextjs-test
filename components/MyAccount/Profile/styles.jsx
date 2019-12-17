export default theme => ({
  root: {
    padding: theme.spacing(1),
    background: ""
    // padding: 25
  },
  title: { fontSize: 30, fontWeight: 500, lineHeight: 1, paddingTop: 15 },
  titleEmail: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 1,
    paddingTop: 15,
    color: "grey"
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 200,
    lineHeight: 0.5,
    color: "grey",
    padding: 15
  },
  fab: { position: "absolute", top: 0, right: 0 },
  button: {
    margin: theme.spacing(2),
    outline: "none !important",
    position: "relative"
  },
  input: {
    error: {
      border: "1px solid red",
      borderRadius: 7,
      width: 200,
      margin: "15px auto",
      color: "red"
    },
    sucess: {
      border: "1px solid green",
      borderRadius: 7,
      width: 200,
      margin: "15px auto",
      color: "green"
    },
    default: { width: 200, margin: "15px auto" },
    rightIcon: {
      marginLeft: theme.spacing(1)
    }
  },
  profile: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  badge: { position: "absolute", top: 0, right: "25%" },

  profileComponentStyle: {
    marginTop: 0,
    padding: 0,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "#000",
    borderBottomWidth: 0,
    boxShadow: "0px 10px 10px -10px black",
    overflowX: "hidden",
    height: "100%"
    // overflowY: "hidden"
    // minHeight: "100vh"
  },
  cardContentStyle: {
    padding: 0,
    margin: 0,
    borderWidth: 0
  },
  list: { padding: theme.spacing(2) }
});
