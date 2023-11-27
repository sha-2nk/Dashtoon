import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';

import { Toaster } from "react-hot-toast";
import Drawer, { DrawerDefault } from './Components/Drawer';
import React from 'react';
// import { Drawer } from '@material-tailwind/react';


function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      
      <Home />
      {/* <DrawerDefault /> */}
      {/* <div className="">
        <button
        className="bg-green-600 text-white rounded px-4 py-1"
        onClick={() => setIsOpen(true)}
      >
        open
      </button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div> */}
    </>
  );
}

export default App;
