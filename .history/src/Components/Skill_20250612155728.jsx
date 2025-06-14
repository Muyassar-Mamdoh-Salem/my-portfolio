import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaReact, } from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandRedux } from 'react-icons/tb'
import { SiFirebase } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { useEffect } from 'react'
// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
    // AOS
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
        Aos.refresh();
    }, []);
    return (
        <section className='bg-[#0A0F1F]'>
            <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>
                <div className={`container mx-auto px-[5%]`}>
                    <h4 className='words text-3xl py-10' data-aos="fade-down">SKILLS</h4>
                    <div className="flex items-center flex-col w-full text-white text-[20px] pb-20">
                        <span data-aos="fade-down">The Skills, Tools And Technolo I Use </span>
                        <div className="flex flex-col mt-10">
                            <div className="flex justify-center gap-4 mb-5" data-aos="fade-down">
                                <FaHtml5 className='shadow-2xl shadow-[#4A90E2]' color='#E34F26' size={40} title='Html'/>
                                <FaCss3Alt className='shadow-2xl shadow-[#4A90E2]' color='#1572B6' size={40} title='Css'/>
                                <FaJsSquare className='shadow-2xl shadow-[#4A90E2]' color='#F7DF1E' size={40} title='Js'/>
                                <FaReact className='shadow-2xl shadow-[#4A90E2]' color='#61DAFB' size={40} title='React js'/>
                                <TbBrandRedux className='shadow-2xl shadow-[#4A90E2]' color='#764ABC' size={40} title='Redux js'/>
                                <RiTailwindCssFill className='shadow-2xl shadow-[#4A90E2]' color='#06B6D4' size={40} title='Tailwind Css'/>
                            </div>
                            <div className="flex justify-center gap-4 mb-5" data-aos="fade-down">
                                <FaBootstrap className='shadow-2xl shadow-[#4A90E2]' color='#7952B3' size={40} title='Bootstrp'/>
                                <IoLogoVercel className='shadow-2xl shadow-[#4A90E2]' color='#000000' size={40} title='Vercel'/>
                                <FaGithub className='shadow-2xl shadow-[#4A90E2]' color='white' size={40} title='Github'/>
                                <FaGitAlt className='shadow-2xl shadow-[#4A90E2]' color='#F05032' size={40} title='Git'/>
                            </div>
                            <div className="flex justify-center gap-4" data-aos="fade-down">
                                <SiFirebase className='shadow-2xl shadow-[#4A90E2]' color='red' size={40} title='Firebase'/>
                                <VscVscode className='shadow-2xl shadow-[#4A90E2]' color='#4A90E2' size={40} title='Vs Code'/>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>
        </section>
    )
}

export default Skill