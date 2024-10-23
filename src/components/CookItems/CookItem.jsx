import PropTypes from 'prop-types'

const CookItem = ({ cookingItems , handleRemove }) => {
    const { recipe_name, preparing_time, calories } = cookingItems
    return (
        <div className='flex items-center justify-between m-3'>
            <p>{recipe_name}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button className='btn btn-accent' onClick={() => handleRemove(cookingItems.id)} >Preparing</button>
        </div>
    )
}

CookItem.propTypes = {
    cookingItems: PropTypes.object.isRequired,
    handleRemove : PropTypes.func.isRequired,
}

export default CookItem