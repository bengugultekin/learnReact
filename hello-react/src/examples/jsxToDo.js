const root = document.getElementById('root');

const app = {
    title: "Todo Application",
    description: "This is a todo application",
    items: ['learn react', 'work hard']
}

const onFormSubmit = (event) => {
    event.preventDefault();

    let item = event.target.elements.txtItem.value;
    if(item) {
        app.items.push(item);
        event.target.elements.txtItem.value='';
        render();
    }
    console.log('form submitted');
}

const clearItems = () => {
    app.items = [];
    render();
}

const render = () => {
    let template =  (
        <div>
            <h1>{app.title}</h1>
            <div>{app.description}</div>
            {
                <ul>
                    {
                        app.items.map((item,index) => {
                       return <li key={index}>{item}</li>
                    })
                    }
                </ul>
            }
            <p><button onClick={clearItems}>Clear Items</button></p>
            <p>{app.items.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="txtItem"/>
                <button type="submit">Add Item</button>
            </form>
        </div>
    );

    ReactDOM.render(template, root);
}


render();

//renderApp();