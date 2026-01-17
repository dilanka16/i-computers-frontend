
import './App.css'
import Productcard from './components/productCard'

function App() {
  

  return (
    <>
     
     <Productcard name="Laptop" price="100,000" image="https://picsum.photos/seed/picsum/200/300"/>
     <Productcard name="phone" price="800,000" image="https://picsum.photos/seed/picsum/200/300"/> 
     <Productcard name="Watch" price="50,000" image="https://picsum.photos/seed/picsum/200/300"/>
     
    </>
  )
}

export default App
