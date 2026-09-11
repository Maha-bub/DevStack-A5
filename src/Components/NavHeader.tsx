import Logo from '../assets/logo-text.png'
const NavHeader = () => {
    return (
        <>

            <nav className='container sticky z-50 top-0 bg-white mx-auto px-7'>
                <div className='flex justify-between items-center py-5 border-b-2 border-slate-200'>
                    <img className='h-12' src={Logo} alt="DevStack Logo" />
                    <ul className='flex gap-7 text-[#475569] items-center justify-center'>
                        <li><a className='text-[#D91B7E] ' href="">Home</a></li>
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


        </>
    );
};

export default NavHeader;