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
import "../../Style/Header.css";
import { color } from "@mui/system";
import MainSidebar from "../../components/MainSidebar";
import Navcat from "../../components/NavCat";
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
    <div>
      <AppBar sx={{ bgcolor: "white" }}>
        <Toolbar>
          {/*Inside the IconButton, we
    can render various icons*/}
          <Grid
            container
            justify="flex-end"
            alignItems="flex-end"
            height="100px"
          >
            <Typography
              className={classes.typo}
              variant="h2"
              component="div"
              sx={{
                flexGrow: 1,
                color: "black",
                fontFamily: "BNazanin",
                marginBottom: "20px",
              }}
            >
              فروشگاه لاکچری
            </Typography>

            <Button
              sx={{
                color: "black",
                fontFamily: "BNazanin",
                fontSize: "20px",
                marginBottom: "40px",
              }}
              color="inherit"
            >
              منو
            </Button>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: "black" }}
              style={{ color: "black", bottom: 3, right: 3 }}
            ></IconButton>
            <div className="login">
              <AiOutlineUser style={{ fontSize: "70px", color: "black" }} />
              <AiOutlineShopping style={{ fontSize: "70px", color: "black" }} />
            </div>
            {/* <div className="burger">
              <Sidebar
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
              />
            </div> */}
          </Grid>
          {/*This is a simple Menu
        Icon wrapped in Icon */}

          {/* The Typography component applies
    default font weights and sizes */}
        </Toolbar>
        <div dir="rtl">
          <Navcat></Navcat>
        </div>
        <div dir="rtl">
          <MainSidebar></MainSidebar>
        </div>
      </AppBar>
    </div>
  );
}
export default Header;
