import axios from "axios";
import React, { useEffect, useState } from "react"
import TableItem from "./components/TableItem";
import GraphItem from "./components/GraphItem";
import './styles/App.css'


function App() {

  const  [orders, setOrders ] = useState([])

  async function fetchOrders(){
    await axios.post("http://127.0.0.1:8000/test/update_numbers/")
    const response = await axios.get("http://127.0.0.1:8000/test/get_numbers/")
    setOrders(response.data)
  }

  useEffect(() => {
    fetchOrders()
  }, [])


  return (
    <div className="App">
      <TableItem orders={orders}/>
      <GraphItem orders={orders} />
    </div>
  );
}

export default App;