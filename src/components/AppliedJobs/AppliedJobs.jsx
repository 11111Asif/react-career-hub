import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";


const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    // console.log(jobs)

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job =>
                job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job =>
                job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication()
        if (jobs.length > 0) {

            const jobsApplied = []
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    return (
        <div>
            <h2>jobs i applied: {appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <div className="flex mb-8 border-2 w-auto rounded-md bg-slate-100">
                            <img className="py-5 px-5 bg-[#f4f4f4] w-[300px]" src={job.logo} alt="" />
                            <div className="py-5 px-5 ">
                                <span className="text-2xl ml-5">{job.job_title}</span>
                                <p className="text-xl ml-5">{job.company_name}</p>

                                <div className="flex gap-6 mt-3 ml-5">
                                    <button className="w-[110px] h-[40px] border-2 border-[#7e90fe] text-[#7e90fe]">{job.remote_or_onsite}</button>
                                    <button className="w-[110px] h-[40px] border-2 border-[#7e90fe] text-[#7e90fe]">{job.job_type}</button>
                                </div>
                                <div className="flex gap-10 mt-3 ml-5">
                                    <p className="flex gap-3"><IoLocationOutline className="text-2xl"></IoLocationOutline>{job.location}</p>
                                    <p className="flex gap-3"><AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>{job.salary}</p>
                                </div>
                                <div className="ml-5 mt-3 mb-3">
                                    <button className="bg-[#9873ff] text-white w-[181px] h-[50px] rounded-md">View Details</button>
                                </div>
                            </div>


                        </div>

                    </li>)

                }
            </ul>
        </div>
    );
};

export default AppliedJobs;