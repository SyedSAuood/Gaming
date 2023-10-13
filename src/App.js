// import React,{useEffect} from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Home   from './pages/Home'
import  Valo from './pages/Valo'
import  Csgo from './pages/Csgo'
import  Dota from './pages/Dota'
import  Mario from './pages/Mario'
import  Apex from './pages/Apex'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Callofduty from './pages/Callofduty'
import Fifa from './pages/Fifa'

import { useStateContext } from './contexts/ContextsProvider'
import News from './pages/News'
import Shop from './pages/Shop'

const App = () => {
  const { activeMenu } = useStateContext()
  const [games, setGames] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3000/api/gamesData.json')
      .then(res => res.json())
      .then(data => {
        setGames(data)
        console.log(data)
      })
      .catch(e => console.log(e.message))
  }
  useEffect(() => {
    fetchData()
  }, [])

  
  return (

    <BrowserRouter>
      <div className=' flex relative dark:bg-main-dark-bg'>
      {activeMenu ? (
              <div className='w-72 fixed sidebar
              dark:bg-secondary-dark-bg
              bg-main-bg' >
                <Sidebar className='transition duration-700 ease-in-out'/>
              </div>
            ) : (
              <div className='w-0
              dark:bg-secondary-dark-bg ' >
                  <Sidebar className='transition duration-700 ease-in-out'/>
              </div>
            )}
           <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen 
             w-full 
             
             ${activeMenu
               ? 'md:ml-72'
                : 'flex-2'}`
           
           }> 
            <div className='fixed md:static 
            bg-main-dark-bg
            dark:bg-secondary-dark-bg
            navbar w-full '>
              <Header/>
            </div>
            
           
      <div>
      <Routes>
          {/*Home Route */}
          <Route path='/' element={<Home games={games} />}/>
          <Route path='/Home' element={<Home games={games} />}/>
          {/* game route */}
          <Route path='/Apex' element={<Apex/>}/>
          <Route path='/FiFa' element={<Fifa/>}/>
          <Route path='/CALLOFDUTY' element={<Callofduty/>}/>
          <Route path='/Cs:go' element={<Csgo/>}/>
          <Route path='/Dota 2' element={<Dota/>}/>
          <Route path='/Mario' element={<Mario/>}/>
          <Route path='/Valorant' element={<Valo games={games} />}/>
           {/* app route */}

          <Route path='/Latest news' element={<News games={games} />}/>
          <Route path='/Shop' element={<Shop games={games} />}/>
          {/* <Route path='/live Steaming' element={<Livestreaming/>}/> */}
        </Routes>
      </div>
      </div>
      
      

    </div>

    </BrowserRouter>
    
  )
}

export default App