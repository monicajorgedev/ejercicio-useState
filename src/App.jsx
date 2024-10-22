import './App.css'
import { useState } from 'react'


// primer ejercicio
function AppList() {
    const [name, setName] = useState('Sofia');
    
    const handleChangeName = (teacherName) => {
      setName(teacherName)
    }
  
    return (
      <>
       <h2>Teacher Name: {name}</h2>
       <ul>
        <li onClick={()=> handleChangeName('Data')}>Data</li>
        <li onClick={()=> handleChangeName('Reyes')}>Reyes</li>
        <li onClick={()=> handleChangeName('Yolanda')}>Yolanda</li>
       </ul>
      </>
    )
  }
  
  //ejercicio con Bonus
  
  function AppForm () {
    const [name, setName] = useState('Sofia')
    const [newName, setNewName] = useState('')
    
    const changeName = (e) => {
      e.preventDefault()
     //newName ? setName(newName) : null
      // opción 1
      //if(!newName) {
      //   return
      // } 
      // setName(newName)

      //opcion2
      //el trim es para eliminar los espacios
      if(newName.trim()) {
      setName(newName)
      setNewName('')}
      setNewName('')
  
    }
  
    return (
      <>
      <h2>Teacher Name: {name}</h2>
      <form onSubmit={changeName}>
        <input 
          type='text'  
          value={newName} 
          onChange={(e)=> setNewName(e.target.value)} 
          placeholder='add a name'>
        </input>
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
  
  