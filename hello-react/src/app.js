//const Header = function () {
//    return <h1>Hello React</h1>
//}

class ToDoApp extends React.Component{
    render() {
        const app = {
            title: "Todo Application",
            description: "This is a todo application",
            items: ['learn react', 'work hard']
        }
        return (
            <div>
                <Header title={app.title} description={app.description}/>
                <ToDoList items={app.items}/>
                <Action />            
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
      return (
        <div>
          <h1>{this.props.title}</h1>
          <div>{this.props.description}</div>
        </div>
      );
    }
}

class ToDoList extends React.Component{
    render() {
        return (
            <ul>
                {
                    this.props.items.map((item,index) =>
                        <ToDoItem key={index} item={item}/>
                    )
                }
            </ul>
        );
    }
}

class ToDoItem extends React.Component {
    render() {
        return(
            <li>{this.props.item}</li>
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