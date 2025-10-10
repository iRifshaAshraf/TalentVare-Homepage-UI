import { Bookmark, MapPin, Clock } from 'lucide-react';
import { Card } from '../ui/card';
import { useState } from 'react';

export const JobCard = ({
    isPromoted = false,
    jobTitle = "UI/UX Designer",
    company = "Teams",
    companyLogo = "/src/assets/teams-logo.png",
    location = "Seattle, USA (Remote)",
    postedTime = "1 day ago",
    applicants = "22 applicants"
}) => {
    const [fillIcon, setFillIcon] = useState(false);

    return (
        <Card className="px-3 sm:px-4 2xl:px-5 py-[0.625rem] sm:py-3 2xl:py-[0.625rem] rounded-[0.625rem] text-left h-full flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-2 sm:gap-[0.3125rem]">

                {isPromoted && (
                    <span className="text-dark text-[0.625rem] sm:text-xs font-semibold">
                        Promoted
                    </span>
                )}


                <div className="flex items-center gap-2 sm:gap-[0.625rem]">
                    <div className="bg-[#FAFAFA] rounded-[0.625rem] w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
                        <img
                            src={companyLogo}
                            alt={company}
                            className="w-5 h-5 sm:w-[23px] sm:h-[22px] object-contain"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h5 className="text-[#333333] text-sm sm:text-base font-medium truncate">{jobTitle}</h5>
                        <h6 className="text-[#333333] text-xs sm:text-sm font-light leading-none truncate">{company}</h6>
                    </div>
                </div>


                <div className="flex items-center gap-1.5 sm:gap-[0.625rem]">
                    <span className="text-muted flex-shrink-0 w-3 h-3 sm:w-[12px] sm:h-[12px]">
                        <MapPin className="w-full h-full" />
                    </span>
                    <p className="text-[0.625rem] sm:text-xs text-muted leading-none truncate">
                        {location}
                    </p>
                </div>


                <div className="flex items-center gap-1.5 sm:gap-[0.625rem]">
                    <span className="text-muted flex-shrink-0 w-3 h-3 sm:w-[0.75rem] sm:h-[0.75rem]">
                        <Clock className="w-full h-full" />
                    </span>
                    <p className="text-[0.625rem] sm:text-xs text-muted leading-none truncate">
                        {postedTime} |{" "}
                        <span className="text-secondary font-medium">
                            {applicants}
                        </span>
                    </p>
                </div>


                <div className="flex justify-between items-center gap-2 mt-1 sm:mt-2">
                    <button className="font-normal rounded-sm text-white px-3 sm:px-[1.875rem] py-2 sm:py-[0.625rem] leading-none text-[0.625rem] sm:text-xs bg-secondary hover:bg-white hover:text-secondary hover:border-secondary border-1 cursor-pointer transition-colors flex-1 sm:flex-initial whitespace-nowrap">
                        Apply Now
                    </button>

                    <span
                        className="cursor-pointer p-1.5 sm:p-0 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                        onClick={() => setFillIcon((prev) => !prev)}
                    >
                        {fillIcon ? (
                            <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 text-[#AAAAAA] fill-[#AAAAAA]" />
                        ) : (
                            <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 text-[#AAAAAA]" />
                        )}
                    </span>
                </div>
            </div>
        </Card>
    );
};

export default JobCard;