import { useState } from 'react';
import { Context } from './context/Context';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RoutesMain } from './RoutesMain';
import { contactList } from './data/ContactData';

function App() {
  const [mainList, setMainList] = useState(contactList);
  return (
   <BrowserRouter>
    <Context.Provider value={{
        mainList,
        setMainList,
      }}>
   <RoutesMain/>
   </Context.Provider>
   </BrowserRouter>
  );
}

export default App;