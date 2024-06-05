import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const Card = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="Card" onClick={toggleExpanded}>
      <CompactCard param={props} />
      <AnimatePresence>
        {isExpanded && <ExpandedCard param={props} />}
      </AnimatePresence>
    </div>
  );
};

const CompactCard = ({ param }) => {
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        color: "white",
      }}
    >
      <span>{param.title}</span>
      <CircularProgressbar value={param.barValue} text={`${param.value}`} />
    </motion.div>
  );
};

const ExpandedCard = ({ param }) => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      // Rest of your options
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div
        style={{
          alignSelf: "flex-end",
          cursor: "pointer",
          color: "white",
        }}
      >
        <UilTimes />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};

export default Card;
