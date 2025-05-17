import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, company_name, remote_or_onsite, job_title, location, job_type, salary} = job;
    return (
        <div className="w-auto rounded-md border-2 border-gray-50 bg-slate-50">
            <img className="ml-5 mt-5" src={logo} alt=""  />
            <h3 className="ml-5 font-bold text-black text-2xl">{job_title}</h3>
            <h5 className="ml-5">{company_name}</h5>
            <div className="flex gap-6 mt-3 ml-5">
                <button className="w-[110px] h-[40px] border-2 border-[#7e90fe] text-[#7e90fe]">{remote_or_onsite}</button>
                <button className="w-[110px] h-[40px] border-2 border-[#7e90fe] text-[#7e90fe]">{job_type}</button>
            </div>
            <div className="flex gap-10 mt-3 ml-5">
                <p className="flex gap-3"><IoLocationOutline className="text-2xl"></IoLocationOutline>{location}</p>
                <p className="flex gap-3"><AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>{salary}</p>
            </div>
            <Link to={`/job/${id}`}>
                <button className="bg-[#9873ff] ml-5 mb-5 text-white w-[121px] h-[30px] mt-5 rounded-md">View Details</button>
            </Link>
        </div>
    );
};

export default Job;