import FooterLogo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <>
            <footer className='mt-10 mx-auto pt-10 border-t-2 border-slate-200'>
                <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex md:flex-row md:justify-between items-center'>
                    <div className='w-full md:h-6/12'>
                        <img src={FooterLogo} alt="" />
                        <p className='text-lg text-[#64748B] mt-3 text-sm sm:text-base'>Curated tools, technologies and rsources for developing modern software.</p>
                        <ul className='flex flex-wrap mt-3 space-y-3 gap-x-4 text-sm sm:text-base font-semibold font-semibold text-[#64748B]'>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div >
                    <div className='w-full md:w-7/12 grid grid-cols-1 ml-6 sm:grid-cols-3 gap-6'>
                        <div>
                            <h2 className='text-lg font-semibold decoration-' >Product</h2 >
                            <ul className='text-[16px] font-semibold text-[#64748B] space-y-1' >
                                <li><a href="#">Web App</a></li>
                                <li><a href="#">Mobile App</a></li>
                                <li><a href="#">CMS</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold decoration-'>Pages</h2 >
                            <ul className='text-[16px] font-semibold text-[#64748B] space-y-1'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Technologies</a></li>
                                <li><a href="#">Projects</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold'>Legal</h2 >
                            <ul className='text-[16px] font-semibold text-[#64748B] space-y-1'>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='container m-10 pt-10 flex justify-between mx-auto border-t-2 border-slate-200'>
                    <p className='ml-5'>&copy; 2026 Dev Stack.All rights reserved!</p>
                    <ul className='flex justify-between gap-4 mx-7 space-y-1'>
                        <li>Privacy</li>
                        <li>Conditions</li>
                    </ul>
                </div>
            </footer >

        </>
    );
};

export default Footer;