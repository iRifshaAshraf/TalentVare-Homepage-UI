import FeaturedJobs from "@/components/sections/FeaturedJobs";
import LatestJobs from "@/components/sections/LatestJobs";
import RecommendedJobs from "@/components/sections/RecommendedJobs";
import SearchForm from "@/components/sections/SearchForm";


const FindJobs = () => {
    return (
        <>
            <SearchForm />
            <FeaturedJobs />
            <RecommendedJobs />
            <LatestJobs />
        </>
    );
};

export default FindJobs;
