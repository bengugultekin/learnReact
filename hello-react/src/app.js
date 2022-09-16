var root = document.getElementById('root');

var template =  <div>
                    <h1 id="header">Hello World!</h1>
                    <div>Lorem, ipsum dolor.</div>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                </div>;

var product = {
    name: "Samsung S10",
    price: 20000,
    description: "çok iyi bir telefon..",
    types: ['red', 'blue']
}

function formatPrice(p) {
    return p.price + 'TL';
}

function getDescription(description) {
    if(description) {
        return <p id="product-desc">description: {description}</p>;
    }
    else {
        return 'no desc';
    }
}

var template2 = (
    <div id="product-details">
        <h2 id="product-name">name: {product.name ? product.name : 'no name'}</h2>
        {(product.price && product.price > 0) && <p>price: {formatPrice(product)}</p>}
        {getDescription(product.description)}
        <p>{product.types.length > 0 ?'there are options' : 'no options'}</p>
    </div>
);
// ReactDOM
ReactDOM.render(template2, root);