"use client";

import { courses, userProgress } from "@/db/schema";
import Card from "./Card";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};
const List = ({ courses, activeCourseId }: props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const handleCourseClick = (courseId: number) => {
    if (pending) return;
    if (activeCourseId === courseId) {
      return router.push("/learn");
    }
    startTransition(() => {
      updateUserProgress(courseId).catch(() =>
        toast.error("Something went wrong.")
      );
    });
  };
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.name}
          imageSrc={course.imageSrc}
          onClick={() => handleCourseClick(course.id)}
          isActive={activeCourseId === course.id}
          disabled={pending}
        />
      ))}
    </div>
  );
};

export default List;
