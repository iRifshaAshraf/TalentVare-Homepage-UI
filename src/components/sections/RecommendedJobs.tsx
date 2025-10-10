
import { JobCard } from './JobCard';

export const RecommendedJobs = () => {
    const recommendedJobs = [
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
    ];

    return (
        <div className="flex flex-col gap-[0.9375rem] pb-[1.5625rem] border-b border-[#E9ECEF] pt-5">
            <div className="flex justify-between items-center">
                <div className="flex items-center sm:gap-[0.9375rem] gap-2">
                    <h3 className="text-[##333333] sm:text-[18px] text-base font-medium">Recommended Jobs</h3>
                    <a
                        className="text-secondary underline underline-offset-4 sm:text-sm text-[0.75rem] "
                        href="#"
                    >
                        See Recommended Jobs
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {recommendedJobs.map(job => (
                    <JobCard key={job.id} />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {recommendedJobs.map(job => (
                    <JobCard key={job.id} />
                ))}
            </div>
        </div>
    );
};

export default RecommendedJobs