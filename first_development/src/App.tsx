import React, { Suspense } from 'react'
import './App.css'
import { SuspendExer } from './components/SuspendExer'

const App = () => {
  return (
    <div className='App'>
      <div>マムシ</div>
      <SuspendExer />
    </div>
  )
}

export default App
