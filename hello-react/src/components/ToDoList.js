import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
    return (
        <div>
            <ul className="list-group">
                {
                    props.items.map((item,index) =>
                        <ToDoItem deleteItem={props.deleteItem} key={index} item={item}/>
                    )
                }
            </ul>
            {/* {
                props.items.lenght > 0
                ?  
                <p>
                    <button className="btn btn-outline-danger float-right btn-sm mt-3" onClick={props.clearItems}>Clear Items</button>
                </p>
                :
                <p className="alert alert-warning">
                    Add item to start
                </p>
            } */}
                <p>
                    <button className="btn btn-outline-danger float-right btn-sm mt-3" onClick={props.clearItems}>Clear Items</button>
                </p>
            
        </div>
    );
}

export default ToDoList;