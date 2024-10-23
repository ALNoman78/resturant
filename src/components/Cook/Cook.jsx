import PropTypes from 'prop-types'
import CookItem from '../CookItems/CookItem'

const Cook = ({ cookData , handleRemove  }) => {
    return (
        <div className='w-[40%] my-10 border border-gray-300 rounded-xl p-4'>
            <h3 className='text-center text-2xl font-bold border-b pb-3'>Want to Cook : 0{cookData.length}</h3>
            {
                cookData.map((cook, idx) => <CookItem key={idx} 
                cookingItems={cook} handleRemove ={handleRemove}></CookItem>)
            }
            <h3 className='text-center text-2xl font-bold border-b pb-3'>Want to Cook : 0{cookData.length}</h3>
        </div>
    )
}

Cook.propTypes = {
    cookData: PropTypes.array.isRequired,
    handleRemove : PropTypes.func.isRequired,
}

export default Cook