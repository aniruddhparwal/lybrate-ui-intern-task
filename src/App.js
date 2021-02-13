import { useEffect, useState } from "react";
import CardsContainer from "./Components/CardsContainer";

function App() {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  useEffect(async () => {
    try {
      const response = await fetch(
        'https://reqres.in/api/users?page=1',
      ).then(res => res.json())

      console.log("Result response : ", response.data)

      setData(response.data)
      console.log("Data recieved:", data)
    } catch (err) {
      console.log("True fetch error: ", err)
    }

  }, [])
  return (
    <div className="App">
      <input value={input} onChange={e => { setInput(e.target.value) }} />
      {data.length != 0 && <CardsContainer data={data} searchInput={input} />}
    </div>
  );
}

export default App;
