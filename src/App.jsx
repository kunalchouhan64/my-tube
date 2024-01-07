import React from 'react'
import MainContainer from './Components/MainContainer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faCoffee} />
import { Routes, Route } from 'react-router-dom'
import Container from './Components/VideoPlayerContainer/Container'
import SearchQueryContainer from './Components/SeachQuery/SearchQueryContainer'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/watch' element={<Container />} />
        <Route path='/results' element={<SearchQueryContainer />} />
      </Routes>
    </>
  )
}

export default App
