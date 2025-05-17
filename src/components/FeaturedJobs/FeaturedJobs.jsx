import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

        useEffect(()=>{
            fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
        }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-4 lg:mx-20">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={ dataLength === jobs.length && 'hidden'}>
                <button onClick={()=>setDataLength(jobs.length)} 
                className="text-2xl justify-center w-[174px] h-[50px] bg-[#7e90fe] text-white rounded-lg">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;