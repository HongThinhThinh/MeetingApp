import Image from "next/image";
import React, { useState } from "react";
import HomeCart from "./HomeCart";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const [meetingState, setmeetingState] = useState<
    "isScheduleMeeting " | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const createMeeting = () => {};
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCart
        img="/icons/add-meeting.svg"
        title="New meeting"
        description="Start an instant meeting"
        handleClick={() => setmeetingState("isJoiningMeeting")}
        classname=" bg-orange-1 "
      />
      <HomeCart
        img="/icons/join-meeting.svg"
        title="Schdule Meeting"
        description="Plan your meeting"
        handleClick={() => setmeetingState("isJoiningMeeting")}
        classname=" bg-blue-1 "
      />
      <HomeCart
        img="/icons/add-meeting.svg"
        title="New meeting"
        description="Start an instant meeting"
        handleClick={() => setmeetingState("isJoiningMeeting")}
        classname=" bg-purple-1 "
      />
      <HomeCart
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handleClick={() => setmeetingState("isJoiningMeeting")}
        classname="bg-yellow-1 "
      />

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setmeetingState(undefined)}
        title="Start an instant meeting"
        className="text-center"
        buttonText="Start meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
