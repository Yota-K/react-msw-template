import { useState, useEffect } from 'react'
import './App.css'

function App() {
  type Items = {
    id: number;
    name: string;
  }[];

  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<Items>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://mock.dev/items');
      const data = await res.json();

      setItems(data);
      setMounted(true);
    };

    if (!mounted) getData();
  }, []);

  return (
    <div className="App">
      {mounted && (
        <ul className="items">
          {items.map((e, i) => (
            <li key={i}>{e.id}, {e.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
