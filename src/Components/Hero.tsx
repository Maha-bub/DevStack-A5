import HeroImage from '../assets/banner-stack.png'

const Hero = () => {
    return (

        <div className=" max-w-7xl mx-auto flex justify-between items-center">
            <div className='w-1/2 space-y-2'>
                <h2 className='text-6xl font-extrabold '>Build Your Ideal <br /> <span className='bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span></h2>

                <p className='mb-6 text-sm text-[#475569]'>
                    Explore frontend, backend, database and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>
                <div className='flex gap-4'>
                    <button className="btn btn-soft w-50 bg-gradient-to-r from-[#F97316] to-[#EC4899] text-sm">Explore Technologies</button>
                    <button className="btn btn-outline w-50 ">Learn More</button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="" />
            </div>
        </div>


    );
};

export default Hero;