import { useEffect, useState } from 'react';
import { mycv, myphoto, CV } from '../../public/assets';
import { MdEmail } from 'react-icons/md';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    const [downBar , setDowenBar] = useState(false);
    const [opencv , setOpencv] = useState(false);
    useEffect(() => {
        if(opencv) {
            document.body.classList.add("overflow-hidden");
        }
        else
            document.body.classList.remove("overflow-hidden");
        if(downBar)
            setTimeout(() => setDowenBar(false),5000)
    },[opencv,downBar])
    // AOS
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            mirror: true,
        });
        Aos.refresh();
    }, []);
    return (
        <header id='Home' className='bg-[#0A0F1F] pt-35 pb-15'>
            <div className={`container mx-auto px-[5%]`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex items-center">
                        <div data-aos="fade-right">
                            <h2 className='text-[45px] lg:text-[75px] xl:text-[95px] md:text-[55px] mb-0 words box'>FRONTEND DEVELOPER</h2>
                            <div className="flex items-center gap-3 mt-10">
                                <p className='text-white'>I am Omar</p>
                                <span className='text-[#4A90E2] jop_name'>
                                    Web Developer
                                </span>
                            </div>
                            <p className='text-white mb-5'>Passion Creating Beautiful And Resbonsive Design</p>
                            <div className="flex flex-wrap gap-5">
                                <button onClick={() => setOpencv(true)} className="text-[#4A90E2] border-2 shadow-2xl shadow-[#4A90E2] border-[#4A90E2] hover:text-[#FF6F91] hover:border-[#FF6F91] hover:shadow-[#FF6F91] py-3 px-10 transition duration-500 cursor-pointer rounded-3xl">Veiw CV</button>
                                <a href={CV} download="CV-Omar-Kamal.pdf">
                                    <button className="text-[#FF6F91] border-2 shadow-2xl shadow-[#FF6F91] border-[#FF6F91] hover:text-[#4A90E2] hover:border-[#4A90E2] hover:shadow-[#4A90E2] py-3 px-10 transition duration-500 cursor-pointer rounded-3xl">Dowenload CV</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {opencv && <div onClick={() => setOpencv(false)} className="fixed inset-0 flex justify-center items-center w-full z-[999] bg-[#0A0F1F] p-[10%] cursor-pointer">
                            <img onClick={(e) => e.stopPropagation()} className='w-100 h-100 md:w-120 md:h-150 cursor-auto' src={mycv} alt="Image-Error" loading='lazy' />
                    </div>}
                    <div className="flex justify-center items-center" data-aos="fade-left">
                        <img className='w-[80%] lg:w-[75%] xl:w-[60%] h-full z-10 shadow-2xl shadow-[#4A90E2] hover:shadow-[#FF6F91] rounded-3xl transition duration-500 cursor-pointer' src={myphoto} alt="Image-Error" loading='lazy' />
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="text-white fixed bottom-5 z-100">
                        <div className="flex">
                            {downBar && <a href="https://www.linkedin.com/in/omar-kamall"><FaLinkedin className='rounded-full text-end px-4 py-5 mb-2 mr-3 mt-5 ml-5 bg-gray-800 cursor-pointer' color='blue' size={65}/></a>}
                            {downBar && <a href="mailto:omar.k.0000000@gmail.com"><MdEmail className='rounded-full text-end px-4 py-5 mb-5 bg-gray-800 cursor-pointer' color='red' size={65}/></a>}
                        </div>
                        <div className="flex">
                            {downBar && <a href="https://api.whatsapp.com/send?phone=1006677452"><FaWhatsapp className='rounded-full px-4 py-5 mr-8 bg-gray-800 cursor-pointer' color='green' size={65}/></a>}
                            {!downBar ? <GiSatelliteCommunication onClick={() => setDowenBar(true)} className='rounded-full px-4 py-5 bg-gray-800 cursor-pointer' color='#4A90E2' size={65}/> :
                            <IoMdClose onClick={() => setDowenBar(false)} className='rounded-full px-4 py-5 bg-gray-800 cursor-pointer' color='#4A90E2' size={65}/>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header