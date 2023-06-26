import React from 'react';
import { ReactDOM} from 'react';
import "./App.scss";
import "./App.css";
import { Routes,Route } from 'react-router-dom';
import Layout from './Component/Layout';

function App() 
{
   return(
    <>

<Routes>

<Route path="/" element = {<Layout/>}/>

</Routes>

    
    </>
   )
}

export default App;
