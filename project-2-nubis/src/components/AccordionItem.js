import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const AccordionItem = ({
  color,
  title,
  text,
  icon,
  idx,
  activeIndex,
  setActiveIndex,
}) => {
  const pRef = React.useRef(null);
  const handleClick = () => {
    if (activeIndex === idx) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(idx);
    }
  };
  return (
    <ScrollAnimation animateIn="fadeInUp">
      <article>
        <div className="icon-container" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <div className="info-container">
          <div className="title" onClick={handleClick}>
            <h3>{title}</h3>
          </div>
          <div
            className="collapsible"
            style={{
              height:
                activeIndex === idx
                  ? pRef.current.getBoundingClientRect().height
                  : 0,
            }}
          >
            <p ref={pRef}>{text}</p>
          </div>
        </div>
      </article>
    </ScrollAnimation>
  );
};

export default AccordionItem;
