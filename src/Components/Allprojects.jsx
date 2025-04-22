import axios from 'axios';
import { useEffect, useState } from 'react'

const Allprojects = (props) => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const Api = async () => {
            await axios.get("./data.json")
            .then(res => setProjects(res.data))
            .catch(error => console.log(error))
        };
        Api();
    },[])
    return (
        <section className="bg-[#0A0F1F] pb-20">
            <div className={`container mx-auto px-[5%] ${props.className}`}>
                <h4 className='words text-3xl pt-28 py-8'>ALL PROJECTS</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {projects.map(project => (
                        <div key={project.id} className="overflow-hidden">
                            <div className="border-1 border-gray-600 p-7 md:p-5 rounded-2xl">
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
            </div>
        </section>
    )
}

export default Allprojects