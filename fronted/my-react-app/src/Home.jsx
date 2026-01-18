
import { useState } from "react";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: "₹55,000",
    image: "https://via.placeholder.com/250"
  },
  {
    id: 2,
    name: "Mobile Phone",
    price: "₹25,000",
    image: "https://via.placeholder.com/250"
  },
  {
    id: 3,
    name: "Headphones",
    price: "₹3,000",
    image: "https://via.placeholder.com/250"
  }
];

const Home = () => {
    const[url, setUrl] = useState("");
    const[result, setResult] = useState("");

    const click =  async() =>{
        
        
        const res = await fetch("http://10.214.196.30:3000/product", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({url}),
            
        })

        const data = await res.text();
         
        if(data )
        setResult(data);

         
    }
    

  return (
    <div className="home">
      <h1 className="title">Our Products</h1>

      <div className="product-container">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
       <div className="stock-box">
      <h3>Check Stock</h3>
      <p> hint ! this input fetch data from external host</p>

      <input
        type="text"
        placeholder="Enter quantity"
        value={url}
        onChange={(e) => setUrl(e.target.value)}

        
      />
       
      <button onClick={click}>Check</button> <br /><br />

      <p>{result}</p>

      
    </div>
    </div>
  );
};

export default Home;
