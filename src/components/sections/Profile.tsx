import { Card } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import profilePhoto from '@/assets/images/profile-picture.png';
import coverPhoto from '@/assets/images/cover-photo.png';

const profileDetails = {
    userName: "Albert Flores",
    userDetails: "Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...",
    userLocation: "Clinton, Maryland",
    visitor: 140,
    viewers: 20,
    jobs: 88,
    coverPhoto: coverPhoto,
    profilePicture: profilePhoto,
};

const Profile = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="relative bg-card rounded-md overflow-hidden pb-5">
                <div className="flex justify-center items-center relative isolate">
                    <img
                        className="absolute w-full h-full -z-50 object-cover"
                        src={profileDetails.coverPhoto}
                        alt=""
                        width="400"
                        height="100"
                    />
                    <img
                        className="translate-y-1/2 min-w-20 min-h-20"
                        src={profileDetails.profilePicture}
                        alt=""
                        width="86"
                        height="86"
                    />
                </div>
                <div className="flex flex-col justify-center items-center mx-auto mt-12 max-w-[14.75rem]">
                    <h3 className="text-center text-lg font-semibold text-dark">
                        {profileDetails.userName}
                    </h3>
                    <p className="text-center text-dark font-normal text-sm px-1">
                        {profileDetails.userDetails}
                    </p>
                    <p className="text-center text-muted text-xs">
                        {profileDetails.userLocation}
                    </p>
                </div>
            </div>
            <Card className="p-5 rounded-md gap-1">
                <div className="flex justify-between items-center pb-3 border-b border-[#E9ECEF]">
                    <h6 className="text-sm text-dark leading-none">Profile Visitors</h6>
                    <span className="text-active text-sm leading-none text-secondary">
                        {profileDetails.visitor}
                    </span>
                </div>
                <div className="flex justify-between items-center pb-3 pt-2 border-b border-[#E9ECEF]">
                    <h6 className="text-sm text-dark leading-none">Resume Viewers</h6>
                    <span className="text-active text-sm leading-none text-secondary">
                        {profileDetails.viewers}
                    </span>
                </div>
                <div className="flex justify-between pt-2 items-center">
                    <h6 className="text-sm text-dark leading-none">My Jobs</h6>
                    <span className="text-active text-sm leading-none text-secondary">
                        {profileDetails.jobs}
                    </span>
                </div>
            </Card>
            <Card className="p-[1rem] rounded-md gap-1">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="p-0 cursor-pointer hover:no-underline">
                            <div className="flex flex-col gap-1">
                                <span className="text-dark text-base text-md leading-none decoration-0">
                                    My calendar
                                </span>
                                <span className="text-primary font-normal text-sm text-base leading-none">
                                    Upcoming Interviews
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent></AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>
        </div>
    );
}

export default Profile