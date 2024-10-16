import Header from './components/componentUI'
import '/src/styles/ui.css'
import sampleImage from '/src/images/color-spectrum-1192509_1280.png';
import { OrderForm, Quantity } from './components/orderForm';



function App() {
return (   
<div>
  <Header image= {sampleImage}/>
  <OrderForm></OrderForm>
  <Quantity></Quantity>
  </div>
    
)
}

export default App