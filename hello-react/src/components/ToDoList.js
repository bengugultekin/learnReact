import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
    return (
        <div>
            <ul>
                {
                    props.items.map((item,index) =>
                        <ToDoItem deleteItem={props.deleteItem} key={index} item={item}/>
                    )
                }
            </ul>
            <p>
                <button onClick={props.clearItems}>Clear Items</button>
            </p>
        </div>
    );
}

export default ToDoList;