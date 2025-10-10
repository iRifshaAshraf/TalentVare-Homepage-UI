import SearchForm from "../sections/SearchForm";
import FeaturedJobs from "../sections/FeaturedJobs";
import RecommendedJobs from "../sections/RecommendedJobs";
import LatestJobs from "../sections/LatestJobs";

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
