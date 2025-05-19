import User from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={User}
                        className="w-[700px] h-[600px] rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-5xl font-bold">One Step<br/> Closer To Your<br/> <span className='text-[#7e90fe]'>Dream Job</span></h1>
                        <p className="py-6">
                             Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;