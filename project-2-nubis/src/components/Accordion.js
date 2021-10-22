import React from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.scss";
import { FaTv, FaMicrophone, FaVideo, FaTools } from "react-icons/fa";

const items = [
  {
    color: "#14be9f",
    title: "Analyse the product and design plan",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quam, aliquid at obcaecati dolor natus.",
    icon: <FaTv />,
  },
  {
    color: "#1d79fb",
    title: "Find the market opportunities",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quam, aliquid at obcaecati dolor natus.",
    icon: <FaMicrophone />,
  },
  {
    color: "#dc63ff",
    title: "Prepare the product launch campaign",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quam, aliquid at obcaecati dolor natus.",
    icon: <FaVideo />,
  },
  {
    color: "#ff6c02",
    title: "Evaluate the campaign and adjust",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quam, aliquid at obcaecati dolor natus.",
    icon: <FaTools />,
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  return (
    <div className="accordion-container">
      {items.map((item, idx) => {
        const { color, title, text, icon } = item;
        return (
          <AccordionItem
            key={idx}
            color={color}
            title={title}
            text={text}
            icon={icon}
            idx={idx}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
