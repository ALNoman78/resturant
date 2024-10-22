import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'

const RecipeData = ({handleCook}) => {
    const [recipeData, setRecipeData] = useState([])
    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipeData(data))
    }, [])
    return (
        <div className='md:w-[60%] mx-auto'>
            <h3>This is data :  {recipeData.length}</h3>
            <div className='grid grid-cols-2 gap-4'>
                {
                    recipeData.map((recipe, idx) => 
                    <RecipeCard key={idx} 
                    data={recipe} 
                    handleCook ={handleCook}></RecipeCard>)
                }
            </div>
        </div>
    )
}

RecipeData.propTypes = {
    handleCook: PropTypes.func.isRequired,
}

export default RecipeData