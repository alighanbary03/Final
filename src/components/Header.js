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
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import "../Style/Header.css";
import { color } from "@mui/system";
import Sidebar from "./Sidebar";

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

function Header() {
  const classes = useStyles();
  return (
    <AppBar sx={{ bgcolor: "white" }}>
      <Toolbar>
        {/*Inside the IconButton, we
		can render various icons*/}
        <Grid container justify="flex-end" alignItems="flex-end">
          <Typography
            className={classes.typo}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
            }}
          >
            فروشگاه لاکچری
          </Typography>

          <Button sx={{ color: "black" }} color="inherit">
            دسته بندی محصولات
          </Button>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "black" }}
            style={{ color: "black", bottom: 3, right: 3 }}
          ></IconButton>
          <div className="login">
            <AiOutlineUser style={{ fontSize: "30px", color: "black" }} />
            <AiOutlineShopping style={{ fontSize: "30px", color: "black" }} />
          </div>
          <div className="burger">
            <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            />
          </div>
        </Grid>
        {/*This is a simple Menu
			Icon wrapped in Icon */}

        {/* The Typography component applies
		default font weights and sizes */}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
