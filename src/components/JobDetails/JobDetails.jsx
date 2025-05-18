import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handleApplyJob = () =>{
        saveJobApplication(idInt)
        toast('toast you have applied successfully')
    }

    return (
        <div>
            <h2>Job Details of: {id}</h2>
            <div className="grid gap-5 md:grid-cols-5">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Job Details coming here</h2>
                </div>
                <div className="border md:col-span-2">
                    <h2 className="text-3xl">company</h2>
                    <p>{job.job_title}</p>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
             <ToastContainer />
        </div>
    );
};

export default JobDetails;