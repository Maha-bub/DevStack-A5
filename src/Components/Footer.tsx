import FooterLogo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <>
            <footer className='mt-10 py-10 border-t-2 border-slate-200'>
                <div className='max-w-7xl mx-auto flex justify-between items-center'>
                    <div>\
                        <img src={FooterLogo} alt="" />
                        <p className='text-lg text-[#64748B]'>Curated tools, technologies and rsources for developing modern software.</p>
                        <ul className='flex mt-3 space-y-5 gap-4 text-[a4px] font-semibold text-[#64748B]'>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#"></a>Facebook</li>
                        </ul>
                    </div >
                    <div>
                        <h2 className='text-lg font-semibold decoration-' >Product</h2 >
                        <ul className='text-sm font-semibold text-[#64748B]' >
                            <li><a href="#">Web App</a></li>
                            <li><a href="#">Mobile App</a></li>
                            <li><a href="#">CMS</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold decoration-'>Pages</h2 >
                        <ul className='text-sm font-semibold text-[#64748B]'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Legal</h2 >
                        <ul className='text-sm font-semibold text-[#64748B]'>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>

                    </div>
                </div>
                <div className='container mt-10 pt-10 flex justify-between mx-auto border-t-2 border-slate-200'>
                    <p>&copy; 2026 Dev Stack.All rights reserved!</p>
                    <ul className='flex justify-between gap-4 mx-7'>
                        <li>Privacy</li>
                        <li>Conditions</li>
                    </ul>
                </div>
            </footer >

        </>
    );
};

export default Footer;