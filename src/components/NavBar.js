import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    margin: "auto",
    flexGrow: 1,
    padding: "5px",
  },
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.title}>
          <Typography variant="h3" className={classes.title}>
            Намали со пластика
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default function NavBar() {
  const classes = useStyles();
  return (
    <>
      <ButtonAppBar />
    </>
  );
}
