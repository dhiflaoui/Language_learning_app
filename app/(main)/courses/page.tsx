import { getCourses, getUserProgress } from "@/db/queries";
import List from "@/components/courses/List";
const CoursesPage = async () => {
  const courses = await getCourses();
  const userProgress = await getUserProgress();
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language courses</h1>
      <List
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      ></List>
    </div>
  );
};

export default CoursesPage;
