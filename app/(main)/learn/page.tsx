import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import Header from "./header";
import UserProgress from "@/components/UserProgress";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "" }}
          hearts={5}
          points={100}
          hasActiveSubs={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Learn" />
      </FeedWrapper>
    </div>
  );
};
export default LearnPage;
