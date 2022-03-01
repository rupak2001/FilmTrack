import React from 'react'
import searchicon from "./icons/search_icon.svg"
import homeicon from "./icons/home_icon.svg"
import Startpg from './startpg'
import Finderpg from './finderpg'
import Searchres from './searchres'
import MovieInfo from './movieinfo'
import {Route,Routes,Link,useNavigate} from 'react-router-dom'



var apilinksearch = null
var filmID = null
function App() {
  const navigate = useNavigate()
  function apilink(data){
    apilinksearch = data
    navigate('/resultlist')
  }
  
  function returnfunc(data){
    if(data == 1){
      navigate('/search')
    }
  }

  function findmovinfo(data){
    filmID = data
    navigate('/movinfo')
  }

  return (
    <div className="h-screen w-screen bg-gray-800">
      <div className='h-14 w-screen bg-gray-600 fixed z-10 flex flex-row justify-center items-center justify-evenly'>
        <h1 className='text-white font-mono text-2xl'>FilmTrack</h1>
        <div className='flex flex-row justify-end items-center w-36 '>
          <Link to="/"><button><img src={homeicon} className = "h-6 mr-6" alt="Homeicon" /></button></Link>
          <Link to="/search"><button><img src={searchicon} alt="searchicon" className='w-6 h-6' /></button></Link>
        </div>
      </div>
    
      <Routes>
        <Route exact path='/' element = {<Startpg findmovinfo = {findmovinfo}/>}/>
        <Route path='/search' element = {<Finderpg apilink = {apilink}/>}/>
        <Route path='/resultlist' element = {<Searchres apilink = {apilinksearch} findmovinfo = {findmovinfo} returnfunc = {returnfunc}/>}/>
        <Route path = "/movinfo" element = {<MovieInfo movID = {filmID}/>}/>
      </Routes>

    </div>
  )
}

export default App
