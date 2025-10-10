import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const SearchForm = () => {
    const [formValues, setFormValues] = useState({
        title: "",
        location: "",
        jobType: "",
    });

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        setFormValues({
            title: "",
            location: "",
            jobType: "",
        });
    };

    return (
        <div className="flex flex-col gap-4 sm:gap-5 border-b pb-4 sm:pb-5">
            {/* Heading */}
            <div className="text-left">
                <h2 className="text-lg sm:text-xl font-semibold text-dark">
                    Find your Dream Job, <span className="text-secondary">Albert!</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-500 mt-1">
                    Explore the latest job openings and apply for the best opportunities available today!
                </p>
            </div>

            {/* Search Form */}
            <Card className="p-3 sm:p-5 rounded-lg border-none border-0 shadow-none">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col lg:flex-row justify-between lg:items-center gap-3 lg:gap-0"
                >
                    {/* Job Title Input - Full width on mobile, fixed width on desktop */}
                    <div className="w-full lg:min-w-[43%] xl:min-w-[55%]">
                        <Input
                            name="title"
                            placeholder="Job Title, Company, or Keywords"
                            value={formValues.title}
                            onChange={handleChange}
                            className="h-[2.3125rem] border-none shadow-none"
                        />
                    </div>

                    {/* Select Fields + Button - Stack on mobile, horizontal on desktop */}
                    <div className="flex flex-col sm:flex-row lg:flex-1 lg:flex-nowrap items-stretch sm:items-center justify-between gap-3 sm:gap-2 lg:gap-0">
                        {/* Location */}
                        <div className="w-full sm:flex-1 lg:w-[10.625rem] xl:w-[10.75rem] lg:border-x lg:border-gray-200 lg:px-2">
                            <Select
                                value={formValues.location}
                                onValueChange={(val) => handleSelectChange("location", val)}
                            >
                                <SelectTrigger className="shadow-none border-0 cursor-pointer h-[2.3125rem]">
                                    <SelectValue placeholder="Select Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="new-york">New York</SelectItem>
                                    <SelectItem value="houston">Houston</SelectItem>
                                    <SelectItem value="karachi">Karachi</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Job Type */}
                        <div className="w-full sm:flex-1 lg:w-[6.875rem]">
                            <Select
                                value={formValues.jobType}
                                onValueChange={(val) => handleSelectChange("jobType", val)}
                            >
                                <SelectTrigger className="shadow-none border-0 cursor-pointer h-[2.3125rem]">
                                    <SelectValue placeholder="Job Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="frontend">Frontend</SelectItem>
                                    <SelectItem value="backend">Backend</SelectItem>
                                    <SelectItem value="designer">Graphic Designer</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Search Button */}
                        <Button
                            type="submit"
                            className="font-normal text-white text-sm sm:text-base px-4 sm:px-6 py-[0.625rem] gap-2 bg-secondary hover:bg-white hover:text-secondary hover:border-secondary border-1 cursor-pointer w-full sm:w-auto whitespace-nowrap"
                        >
                            <Search size={18} />
                            Search
                        </Button>
                    </div>
                </form>
            </Card>

            {/* Similar Jobs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-wrap">
                <span className="text-primary text-sm font-medium">Similar:</span>
                <ul className="flex items-center gap-2 sm:gap-3 text-primary text-xs sm:text-sm  flex-wrap">
                    {["Frontend", "Backend", "Graphic Designer"].map((job) => (
                        <li
                            key={job}
                            onClick={() =>
                                setFormValues({ ...formValues, jobType: job.toLowerCase() })
                            }
                            className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-400 rounded-md hover:bg-white hover:text-secondary hover:border-secondary hover:border-1 cursor-pointer transition"
                        >
                            {job}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchForm;