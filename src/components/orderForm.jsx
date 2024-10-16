function OrderForm (){

    const products = ['Amd Ryzen 5 3600 (25€)', 'Option 2', 'Option 3', 'Option 4'];

    return (
    <div> <h3>Select product</h3>  
        <div id="order">
        <p>Product: </p>
        <select name="dropdown" id="dropdown">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>
    </div>
    </div>
    
    )
}

function Quantity (){
    return (
        <div>
        <p>Quantity: </p>
        <button>-</button>
        <button>+</button>
        </div>
    )
}
  

export {OrderForm, Quantity};