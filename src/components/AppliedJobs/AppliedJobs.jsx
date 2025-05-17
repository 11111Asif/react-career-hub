import { useLoaderData } from "react-router-dom";


const AppliedJobs = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    return (
        <div>
            <h2>jobs i applied</h2>
        </div>
    );
};

export default AppliedJobs;