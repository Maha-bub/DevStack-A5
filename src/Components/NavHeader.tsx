import { HiMenu, HiXCircle } from 'react-icons/hi';
import Logo from '../assets/logo-text.png'
import { useState } from 'react';
const NavHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>

            <nav className='container sticky z-50 top-0 bg-white mx-auto px-7'>


                <div className='max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 border-b-2 border-slate-200'>
                    <div className='flex justify-between items-center py-4'>
                        <img className='h-8 sm:h-12' src={Logo} alt="DevStack Logo" />

                        {/* desktop menu */}
                        <ul className='hidden md:flex items-center gap-7 text-[#475569]'>
                            <li>
                                <a className='text-[#D91B7E] ' href="">Home
                                </a>
                            </li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>


                        <div className='fled
                        items-center gap-3 sm:gap-4'>
                            {/* desktop btns */}
                            <div className='hidden sm:flex items-center gap-3 sm:gap-4'>
                                <button className="rounded-full border-none text-slate-500 outline text-sm font-semibold py-2 px-4
                                 md:px-5">Sign In</button>
                                <button className="rounded-full text-sm font-semibold py-2 px-4 sm:px-5 text-white bg-[#D91B7E]">Sign Up</button>
                            </div>

                            {/* mobilebtn */}
                            <div className='sm:hidden flex items-center gap-2'>
                                <button className="rounded-full text-xs border-none text-slate-500 outline font-semibold p-1">Sign In</button>

                                <button className="rounded-full text-sm font-semibold p-1 px-4 sm:px-5 text-white bg-[#D91B7E]">Sign Up</button>
                            </div>




                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='md:hidden text-3xl'>
                            {
                                isOpen ? <HiXCircle /> : <HiMenu />
                            }
                        </button>

                        {isOpen && (
                            <ul className="md:hidden border-t border-slate-500 px-4 pb-4 space-y-3 absolute">
                                <li>
                                    <a href="#" className="block hover:text-purple-600 font-semibold">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="block hover:text-purple-600">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="block hover:text-purple-600">
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="block hover:text-purple-600">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        )}

                    </div>
                </div>
            </nav >


        </>
    );
};

export default NavHeader;