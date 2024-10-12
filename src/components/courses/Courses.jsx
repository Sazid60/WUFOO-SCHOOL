
import CourseCard from './CourseCard';

const Courses = () => {
    return (
        <div>
            <div className=" flex flex-col justify-center items-center mt-3 md:mt-4 lg:mt-7 xl:mt-10 mb-6 container mx-auto">
                <h1 className="text-center font-bold text-sm xl:text-xl mt-4 uppercase text-[#F3511E]">Our Departments</h1>
                <div className="flex justify-center items-center">
                    <p className=" mt-4 text-gray-500 text-center max-w-xl text-[14px] md:text-sm">
                        Supports students with academic guidance and personal development throughout their educational journey.
                    </p>
                </div>
            </div>
            <div>
                <CourseCard />
            </div>
        </div>
    );
};

export default Courses;