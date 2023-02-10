import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  const navigate = useNavigate();
  const [allFruits, setAllFruits] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/Cartlist").then((response) => {
      setAllFruits(response.data);
    });
  }, []);

  console.log(allFruits.length);
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={allFruits.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
