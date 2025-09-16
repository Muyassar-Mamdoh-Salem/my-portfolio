import axios from 'axios';
import { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners';
// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Allprojects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const Api = async () => {
            await axios.get("./data.json")
            .then(res => setProjects(res.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        };
        Api();
    },[])
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
        <section className="bg-[#0A0F1F] pb-20">
            {loading ? <div className='h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div> : 
                <div className={`container mx-auto px-[5%]`}>
                    <h4 className='words text-3xl pt-28 py-8' data-aos="fade-dowen">ALL PROJECTS</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {projects.map(project => (
                            <div key={project.id} className="overflow-hidden">
                                <div className="border-1 border-gray-600 p-7 md:p-5 rounded-2xl" data-aos="fade-dowen">
                                    <img className='rounded mb-5' src={project.img} alt="Image-Error" loading='lazy' />
                                    <p className='text-white text-[15px] mb-5'>{project.description}</p>
                                    <div className="flex gap-3 items-center justify-center">
                                        <a href={project.live_demo} target='_blanck'><button className="text-[#4A90E2] text-[12px] border-2 shadow-2xl shadow-[#4A90E2] border-[#4A90E2] hover:text-[#FF6F91] hover:border-[#FF6F91] hover:shadow-[#FF6F91] py-2 px-6 transition duration-500 cursor-pointer rounded-3xl mt-3">Live Demo</button></a>
                                        <a href={project.githup} target='_blanck'><button className="text-[#4A90E2] text-[13px] border-2 shadow-2xl shadow-[#4A90E2] border-[#4A90E2] hover:text-[#FF6F91] hover:border-[#FF6F91] hover:shadow-[#FF6F91] py-2 px-6 transition duration-500 cursor-pointer rounded-3xl">Githup Code</button></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </section>
    )
}

export default Allprojects