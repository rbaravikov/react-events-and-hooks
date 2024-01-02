import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import List from './components/List'
import { useRef } from 'react'

function App() {

  const [value, setValue] = useState("")
  const listRef = useRef()
  
  const handleChangeInput = (e) => {
    setValue(e.target.value)
  }

  const addWork = () => {
    const newLi = document.createElement("li")
    newLi.innerText = value
    listRef.current.append(newLi)
    setValue("")
  }
  
  return (
    <>
      <h1>Darbų sąrašas</h1>
      <Input handleChangeInput={handleChangeInput} value={value}/>
      <Button addWork={addWork}/>
      <List ref={listRef}/>
    </>
  )
}

export default App
