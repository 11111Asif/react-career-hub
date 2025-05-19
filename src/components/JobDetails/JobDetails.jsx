import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../Utility/LocalStorage";
import { LuBaggageClaim } from "react-icons/lu";
import { AiOutlineDollarCircle } from "react-icons/ai";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('toast you have applied successfully')
    }

    return (
        <div>
            <h2>Job Details of: {id}</h2>
            <div className="grid gap-5 md:grid-cols-5">
                <div className="border md:col-span-3">
                    <p className="ml-8 mr-8"><span className="text-white font-extrabold text-2xl">Job Description:</span> {job.job_description}</p>
                    <p className="ml-8 mr-8"><span className="text-white font-extrabold text-2xl">job_responsibility:</span> {job.job_responsibility}</p>
                    <p className="ml-8 mr-8"><span className="text-white font-extrabold text-2xl">educational_requirements:<br /></span> {job.educational_requirements}</p>
                    <p className="ml-8 mr-8"><span className="text-white font-extrabold text-2xl">experiences: <br /></span> {job.experiences}</p>
                </div>
                <div className="border md:col-span-2">
                    <div className="ml-8 mr-8">
                        <h2 className="text-3xl border-b-2">Jobs Details</h2>
                        <p className="text-xl flex"><AiOutlineDollarCircle className="mt-1.5"></AiOutlineDollarCircle><span className="font-semibold text-white ml-2">salary: </span>  {job.salary}</p>
                        <p className="text-xl flex"><LuBaggageClaim className="mt-1.5"></LuBaggageClaim><span className="font-semibold text-white ml-2">Job title: </span>  {job.job_title}</p>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;