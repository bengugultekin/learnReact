//const Header = function () {
//    return <h1>Hello React</h1>
//}

class ToDoApp extends React.Component{

    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: ['learn React', 'WORK hard', 'eat something']
        }

    }

    clearItems() {
        this.setState({
            items: []
        });
    }

    addItem(item) {
        if(!item) {
            return 'eklemek istediğiniz elemanı girin.'
        } else if (this.state.items.indexOf(item) > -1) {
            return 'aynı elemanı ekleyemezsiniz';
        }
        this.setState((prevState) => {
            return {items: prevState.items.concat(item)}
        })
        // concat iki diziyi arka arkaya birleştiren fonk. tek eleman da gönderilebilir
    }

    deleteItem(item) {
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i
            })
            return {
                items: arr
            }
        })
    }

    render() {
        const app = {
            title: "Todo Application",
            description: "This is a todo application"
        }
        return (
            <div>
                <Header title={app.title} description={app.description}/>
                <ToDoList items={this.state.items} clearItems={this.clearItems} deleteItem={this.deleteItem}/>
                <Action addItem={this.addItem}/>            
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
            <div>
                <ul>
                    {
                        this.props.items.map((item,index) =>
                            <ToDoItem deleteItem={this.props.deleteItem} key={index} item={item}/>
                        )
                    }
                </ul>
                <p>
                    <button onClick={this.props.clearItems}>Clear Items</button>
                </p>
            </div>
        );
    }
}

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem() {
        this.props.deleteItem(this.props.item)
    }
    render() {
        return(
            <li>
                {this.props.item}
                <button onClick={this.deleteItem}> x</button>
            </li>
        );
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: ''
        }
    }
    onFormSubmit(e) {
        e.preventDefault();

        const item = e.target.elements.txtItem.value.trim();
        const error = this.props.addItem(item);
        this.setState({
            error: error
        })
        e.target.elements.txtItem.value = '';
    }
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );    
    }
}


ReactDOM.render(<ToDoApp />, document.getElementById('root'));