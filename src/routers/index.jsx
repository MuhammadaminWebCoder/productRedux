import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LikedCard from '../pages/LikedCard'
import Home from '../pages/Home'
export const IndexRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/likedCard' element={<LikedCard/>}  />
    </Routes>
  )
}