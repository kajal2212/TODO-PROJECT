import React, { useState } from 'react';
import './App.css';
import Mytodoadd from './modules/components/Mytodoadd';
import Mytodolist from './modules/components/Mytodolist';


function App() {
  const [list, setlist] = useState([]);

  let adddetail = (input) => {
    setlist([...list, input]);
  }


  const Deletelistitem = (id) => {
    let newlist = [...list];
    newlist.splice(id, 1);
    setlist([...newlist])

  }


  return (
    <div className="app">
      <div className='area'>
        <h1>mytodoapp</h1>
        <Mytodoadd adddetail={adddetail} />
        {list.map((listitem, i) => {
          return (
            <Mytodolist key={i} index={i} item={listitem} deleteitem={Deletelistitem} />
          )
        }
        )

        }


      </div>



    </div>
  )
}

export default App;
