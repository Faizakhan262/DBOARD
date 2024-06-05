import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoneyIcon from "@mui/icons-material/Money";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CompactCard = ({ param, setExpanded }) => {
  const Png = param.png;

  // Determine which icon to use based on the type
  let icon;
  switch (param.type) {
    case "expenses":
      icon = <MoneyIcon />;
      break;
    case "revenue":
      icon = <TrendingUpIcon />;
      break;
    case "sales":
      icon = <ShoppingCartIcon />;
      break;
    default:
      icon = null;
  }

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        {icon}
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};

export default CompactCard;

