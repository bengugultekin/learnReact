//const Header = function () {
//    return <h1>Hello React</h1>
//}

class ToDoApp extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <ToDoList />
                <Action />            
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>ToDo Application</h1>
          <div>Lorem ipsum dolor sit amet.</div>
        </div>
      );
    }
}

class ToDoList extends React.Component{
    render() {
        return (
            <ul>
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
            </ul>
        );
    }
}

class ToDoItem extends React.Component {
    render() {
        return(
            <li>Todo Item</li>
        );
    }
}

class Action extends React.Component {
    render() {
        return(
            <div>
                <p>
                    <button>Clear Items</button>
                </p>
                <form>
                    <input type="text" name="txtItem" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );    
    }
}


ReactDOM.render(<ToDoApp />, document.getElementById('root'));