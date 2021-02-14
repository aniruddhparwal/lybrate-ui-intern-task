import { useEffect, useState } from "react";
import CardsContainer from "./Components/CardsContainer";
import './Style/style.css'

function App() {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  useEffect(async () => {
    try {
      const response = await fetch(
        'https://reqres.in/api/users?page=1',
      ).then(response => response.json())
      // console.log("Result response : ", response.data)
      setData(response.data)
      // console.log("Data recieved:", data)
    } catch (err) {
      console.log("error fetched: ", err)
    }

  }, [])
  return (
    <div className="app">
      <input value={input} onChange={e => { setInput(e.target.value) }} placeholder="Search with Email" />
      {data.length != 0 && <CardsContainer data={data} searchInput={input} />}
    </div>
  );
}

export default App;
