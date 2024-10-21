import './App.css'
import { useState } from 'react'


// primer ejercicio
function AppList() {
    let [name, setName] = useState('Sofia');
    //const newName = useState('')
  
    return (
      <>
       <h2>Teacher Name: {name}</h2>
       <ul>
        <li><button onClick={()=> setName('Data')}>Data</button></li>
        <li><button onClick={()=> setName('Reyes')}>Reyes</button></li>
        <li><button onClick={()=> setName('Yolanda')}>Yolanda</button></li>
       </ul>
      </>
    )
  }
  
  //ejercicio con Bonus
  
  function AppForm () {
    const [name, setName] = useState('Sofia')
    let [newName, setNewName] = useState('')
    
    const changeName = (e) => {
      e.preventDefault()
      if(!newName) {
        return
      } 
      setName(newName)
      setNewName('')
  
    }
  
    return (
      <>
      <h2>Teacher Name: {name}</h2>
      <form onSubmit={changeName}>
        <input type='text'  value={newName} onChange={(e)=> setNewName(e.target.value)} placeholder='add a name'></input>
        <button type='submit'>Add</button>
      </form>
      </>
    )
  }
  
  function App() {
    return (
      <>
      <AppList />
      <AppForm />
      </>
    )
  }
  
  export default App
  
  