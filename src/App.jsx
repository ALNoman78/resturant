import { useState } from 'react'
import './App.css'
import Cook from './components/Cook/Cook'
import Header from './components/Header/Header'
import RecipeHead from './components/RecipeHead/RecipeHead'
import RecipeData from './components/RecipeData/RecipeData'

function App() {
  const [cookData, setCookData] = useState([])

  const [remove , setRemove ] = useState([])

  const handleRemove = (id) => {
    const deletedItem = cookData.find((del) => del.id === id)
    const updateItem = cookData.filter((upData) => upData.id !== id)
    setCookData(updateItem)
    setRemove([...remove , deletedItem])
  }

  const handleCook = (cook) => {
    const isExist = cookData.find(previousRecipe => previousRecipe.recipe_name === cook.recipe_name)
    if(!isExist){
      setCookData([...cookData , cook])
    }else{
      alert('recipe exist')
    }
    // setCookData(newCookData)
    // const newCookData = [...cookData , cook]
    
  }

  return (
    <>
      <Header></Header>
      <main>
        <RecipeHead></RecipeHead>
        <div className='flex justify-between md:w-10/12 mx-auto'>
          <RecipeData handleCook = {handleCook}></RecipeData>
          <Cook handleRemove = {handleRemove} cookData = {cookData}></Cook>
        </div>
      </main>
    </>
  )
}

export default App
