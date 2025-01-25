import React from "react";


const Accordion = ({ items }) => {
    
    return items.map((item, index) => (
        <div className="item_container" key={index}>
            <h3 className="header_box" >{item.title}</h3>
        </div>
    ));
}

export default Accordion;