import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = (props) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const Api = async () => {
            await axios.get("./data.json")
            .then(res => {
                setProjects(res.data)
            }).catch(error => console.log(error))
            .finally(() => setLoading(false));
        };
        Api();
    },[])
    // Gsap
    useEffect(() => {
        if (!loading && projects.length > 0) {
            gsap.defaults({ ease: "power3" });
            gsap.set(".box", { opacity: 0, y: 100 });
    
            ScrollTrigger.batch(".box", {
                onEnter: batch => gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: { each: 0.15, grid: [1, 3] },
                    overwrite: true
                }),
                onLeave: batch => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
                onEnterBack: batch => gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    overwrite: true
                }),
                onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 100, overwrite: true })
            });
    
            ScrollTrigger.addEventListener("refreshInit", () =>
                gsap.set(".box", { y: 0 })
            );
    
            return () => {
                ScrollTrigger.getAll().forEach(t => t.kill());
            };
        }
    }, [loading, projects]);

    return (
        <section id='portfolio' className='bg-[#0A0F1F] scroll-mt-18'>
            {loading ? <div className='h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div> :
                <div className={`container mx-auto px-[5%] ${props.className}`}>
                    <h4 className='words text-3xl py-10 box'>PORTFOLIO</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {projects.slice(0,8).map(project => (
                                <div key={project.id} className="overflow-hidden">
                                    <div className="border-1 border-gray-600 p-7 md:p-5 rounded-2xl box">
                                        <img className='rounded mb-5' src={project.img} alt="Image-Error" loading='lazy' />
                                        <p className='text-white text-[15px] mb-5 h-10'>{project.description}</p>
                                        <div className="flex gap-3">
                                            <a href={project.live_demo} target='_blanck'><button className="text-[#4A90E2] text-[13px] border-2 shadow-2xl shadow-[#4A90E2] border-[#4A90E2] hover:text-[#FF6F91] hover:border-[#FF6F91] hover:shadow-[#FF6F91] py-2 px-6 transition duration-500 cursor-pointer rounded-3xl">Live Demo</button></a>
                                            <a href={project.githup} target='_blanck'><button className="text-[#4A90E2] text-[13px] border-2 shadow-2xl shadow-[#4A90E2] border-[#4A90E2] hover:text-[#FF6F91] hover:border-[#FF6F91] hover:shadow-[#FF6F91] py-2 px-6 transition duration-500 cursor-pointer rounded-3xl">Githup Code</button></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    <div className="mt-10 text-center pb-20 box">
                        <Link to="/projects"><button className="text-[#FF6F91] border-2 shadow-2xl shadow-[#FF6F91] border-[#FF6F91] hover:text-[#4A90E2] hover:border-[#4A90E2] hover:shadow-[#4A90E2] py-2 px-7 transition duration-500 cursor-pointer rounded-3xl">View All Projects</button></Link>
                    </div>
                </div>
            }
            <div className="h-[1px] bg-gray-600"></div>
        </section>
    )
}

export default Portfolio