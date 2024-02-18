import { useState } from 'react';
import './App.css'
import items from "./data"
import Menu from './Menu';
import Category from './category';
const allCategory = [ 'همه',...new Set(items.map((item) => item.category))];
function App() {
  
  const [dataMenu , setDataMenu] = useState(items);
  const [categorys , setCategorys] = useState(allCategory);

  const filterItems = (category)=>{
    if( category=== "همه"){
      setDataMenu(items)
      return;
    }
    const newItem = items.filter((item) => item.category===category);
    setDataMenu(newItem)
  }
  return (
 

    <main>
      <section className="menu section">
        <div className="title"> 
          <h2>محصولات ما</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Category categorys={categorys}  filterItems={filterItems} />

      <Menu items={dataMenu} />

    </main>
  )
}

export default App;
