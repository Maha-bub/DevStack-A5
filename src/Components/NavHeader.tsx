import Logo from '../assets/logo-text.png'
const NavHeader = () => {
    return (
        <>
            <header >
                <nav className='container mx-auto px-4'>
                    <div className='flex justify-between items-center h-20'>
                        <img className='h-14' src={Logo} alt="DevStack Logo" />
                        <ul className='flex gap-7 items-center justify-center'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        <div className='flex gap-4'>
                            <button className="rounded-full text-sm font-semibold py-2.5 px-5">Sign In</button>
                            <button className="rounded-full text-sm font-semibold py-2.5 px-5 text-white bg-[#D91B7E]">Sign Up</button>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    );
};

export default NavHeader;