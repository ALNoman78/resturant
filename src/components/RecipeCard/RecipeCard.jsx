import PropTypes from 'prop-types'
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFire } from "react-icons/fa";


const RecipeCard = ({ data , handleCook }) => {
    const { id, recipe_name, short_description, preparing_time, calories, img } = data
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl md:w-[330px] md:h-[200px] object-cover" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='pb-2 border-b'>{short_description}</p>
                    <h3 className='font-semibold'>Ingredients :</h3>
                    <ul className='list-disc ml-4'>
                        <li>500g ground beef</li>
                        <li>1 onion, chopped</li>
                        <li>2 cloves garlic, minced</li>
                    </ul>
                    <div className='border-t my-2 flex items-center '>
                        <MdOutlineWatchLater />
                        <p>{preparing_time}</p>
                        <FaFire />
                        <p>{calories} Calories</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleCook(data)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

RecipeCard.propTypes = {
    data: PropTypes.object.isRequired,
    handleCook: PropTypes.func.isRequired,
}

export default RecipeCard