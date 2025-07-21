"use server";
import { db } from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();
  if (!auth || !userId) {
    return { success: false, error: "User not authenticated" };
  }
  const course = await getCourseById(courseId);
  if (!course) {
    return { success: false, error: "Course not found" };
  }
  //TODO: Update once lessons and units are implemented
  //   if (course.units.length || course.units[0].lessons.length === 0) {
  //     return { success: false, error: "Units  not found" };
  //   }

  const existingProgress = await getUserProgress();
  if (existingProgress) {
    await db
      .update(userProgress)
      .set({
        activeCourseId: courseId,
        userName: user?.firstName || "User",
        userImageSrc: user?.imageUrl || "/mascot.svg",
      })
      .where(eq(userProgress.userId, userId));
    revalidatePath("/learn");
    revalidatePath("/courses");
    redirect("/learn");
  }
  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user?.firstName || "User",
    userImageSrc: user?.imageUrl || "/mascot.svg",
  });

  revalidatePath("/learn");
  revalidatePath("/courses");
  redirect("/learn");
};
