
import { useState } from 'react';
import './App.css'
import item from "./data"
import Menu from './Menu';
function App() {

  const [dataMenu , setDataMenu] = useState(item)
  return (
 

    <main>
      <section className="menu section">
        <div className="title">
          <h2>محصولات ما</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Menu items={dataMenu} />

    </main>
  )
}

export default App;
