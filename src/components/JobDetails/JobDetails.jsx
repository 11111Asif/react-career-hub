import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../Utility/LocalStorage";
import { LuBaggageClaim } from "react-icons/lu";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

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
            <h2 className="text-4xl mb-6 mt-6 text-center">Job Details of</h2>
            <div className="grid gap-5 md:grid-cols-5">
                <div className="border md:col-span-3">
                    <div className="mt-5">
                        <p className="ml-8 mr-8"><span className="text-white font-extrabold text-2xl">Job Description:</span> {job.job_description}</p>
                        <p className="ml-8 mr-8"><span className="text-white font-extrabold text-2xl">job_responsibility:</span> {job.job_responsibility}</p>
                        <p className="ml-8 mr-8"><span className="text-white font-extrabold text-2xl">educational_requirements:<br /></span> {job.educational_requirements}</p>
                        <p className="ml-8 mr-8"><span className="text-white font-extrabold text-2xl">experiences: <br /></span> {job.experiences}</p>
                    </div>
                </div>
                <div className="border md:col-span-2">
                    <div className="ml-8 mr-8 mt-5">
                        <h2 className="text-3xl ">Jobs Details</h2>
                        <p className="border-b-2 mt-3 mb-3"></p>
                        <p className="text-xl flex"><AiOutlineDollarCircle className="mt-1.5"></AiOutlineDollarCircle><span className="font-semibold text-white ml-2">salary: </span>  {job.salary}</p>
                        <p className="text-xl flex"><LuBaggageClaim className="mt-1.5"></LuBaggageClaim><span className="font-semibold text-white ml-2">Job title: </span>  {job.job_title}</p>
                        <h4 className="text-2xl mt-3">Contact Information</h4>
                        <p className="border-b-2 mt-5 mb-3"></p>
                        <p className="flex text-xl"><FiPhone className="mt-1.5"></FiPhone><span className="font-extrabold text-white ml-2">Phone: </span> {job.contact_information.phone}</p>
                        <p className="flex text-xl"><MdOutlineEmail className="mt-1.5"></MdOutlineEmail><span className="font-extrabold text-white ml-2">Email: </span> {job.contact_information.email}</p>
                        <p className="flex text-xl"><CiLocationOn className="mt-1 text-3xl"></CiLocationOn><span className="font-extrabold text-white ml-2">Address: </span> {job.contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full mb-5 mt-4">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;