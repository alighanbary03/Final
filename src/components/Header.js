import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  typo: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        {/*Inside the IconButton, we
		can render various icons*/}
        <Grid container justify="flex-end" alignItems="flex-end">
          <Typography
            className={classes.typo}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            فروشگاه لاکچری
          </Typography>

          <Button color="inherit">دسته بندی محصولات</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ bottom: 3, right: 3 }}
          ></IconButton>
        </Grid>
        {/*This is a simple Menu
			Icon wrapped in Icon */}
        <MenuIcon />
        {/* The Typography component applies
		default font weights and sizes */}
      </Toolbar>
    </AppBar>
  );
}
