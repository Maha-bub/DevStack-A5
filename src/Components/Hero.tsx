import HeroImage from '../assets/banner-stack.png'

const Hero = () => {
    return (

        <div className=" max-w-7xl mx-auto px-5 py-7 md:py-8 md:px-4 flex flex-col-reverse gap-7 md:flex-row  md:justify-between md:items-center">
            <div className='w-full md:w-1/2 space-y-2 text-center md:text-left'>
                <h2 className='text-4xl mx-auto mx-6 md:text-6xl font-extrabold text-black'>Build Your Ideal <br /> <span className='bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span></h2>

                <p className='md:mb-6 text-sm text-[#475569]'>
                    Explore frontend, backend, database and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
                    <button className="btn btn-soft w-50 bg-gradient-to-r from-[#F97316] to-[#EC4899] text-sm sm:w-auto px-5">Explore Technologies</button>
                    <button className="btn btn-outline w-50 sm:w-auto px-5 ">Learn More</button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="" />
            </div>
        </div>


    );
};

export default Hero;