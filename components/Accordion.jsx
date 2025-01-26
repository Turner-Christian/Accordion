import { useState } from "react";

const Accordion = ({ items }) => {
    const [isOpen, setisOpen] = useState(null);
    console.log(isOpen)
    const handle_collapse = (id) => {
        if (isOpen === id){
            setisOpen(null);
        }
        else{
            setisOpen(id);
        }
    }

    return items.map((item, index) => (
        <div 
            className="item_container" 
            key={index}
            >
            <div className="drop_box">
                <h3 
                    className="header_box"
                    onClick={() => handle_collapse(index)}
                    >{item.title}</h3>
                {isOpen === index && <p className="content_box">{item.content}</p>}
            </div>
        </div>
    ));
}

export default Accordion;