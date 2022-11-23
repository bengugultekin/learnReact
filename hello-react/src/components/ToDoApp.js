import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";
import Action from './Action';

export default class ToDoApp extends React.Component{

    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: ['learn React', 'WORK hard', 'eat something']
        }

    }

    componentDidMount() {
        const json = localStorage.getItem('items');
        const items = JSON.parse(json);

        if(items) {
            this.setState({
                items: items
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.items.length !== this.state.items.length) {
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items', json);
        }
    }

    componentWillUnmount() {
        console.log('component silindi');
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
