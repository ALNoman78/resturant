import PropTypes from 'prop-types'

const Banner = () => {
    return (
        <div
            className="hero h-[600px] my-8 bg-cover bg-no-repeat w-full rounded-2xl"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/P6cs2y6/Rectangle-1.png)",
            }}>
            <div className=""></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="md:w-[60rem]">
                    <h1 className="mb-5 text-5xl font-bold leading-[70px]">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                    </p>
                    <button className="px-8 py-3 text-black rounded-full font-bold bg-[#0BE58A] mr-4">Get Started</button>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

Banner.propTypes = {}

export default Banner