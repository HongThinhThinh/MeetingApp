"use client";

import { useUser } from "@clerk/nextjs";
import moment from "moment";
import React, { useEffect, useState } from "react";

const Home = () => {
  const user = useUser();
  console.log(user.user);
  const now = new Date();
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = moment().format("h:mm:ss A");
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div
        className="h-[300px] w-full rounded-[20px] bg-hero bg-cover
      "
      >
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcomming Meeting at : 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl lg:text-2xl">
              {time}
            </h1>
          </div>
          <p className="text-lg font-medium text-sky-1 ">{date}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
