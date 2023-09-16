import React from "react";

const Calendar = () => {
  const commonStyles = `border border-red-400 min-h-screen py-10 text-[#ff6081]`;

  // pdf downloader of calendar
  const pdfDownload = () => {
    console.log("Pdf is downloading");
  };

  return (
    <div className={commonStyles}>
      {/* parent div */}
      <div>
        <h1 className="text-3xl font-bold text-center">
          Here's Your launch calendar
        </h1>
        <p className="text-center text-xs py-4">
          Be sure to stick to the timeline to get the most out of <br /> your
          launches + to have a stress-free course launch.
        </p>
        {/* calendar window */}
        <div className="py-10 border-y-2 border-red-400 my-5"></div>

        {/* preview btn */}
        <div className="flex justify-center">
          <button
            onClick={() => pdfDownload()}
            className="px-6 py-3 rounded-lg bg-[#ff6081] text-white text-lg tracking-tight font-semibold"
          >
            Download As PDF
          </button>
        </div>
        {/* reminder email */}
        <div className="py-5 my-4">
          <h1 className="text-center text-md font-semibold">
            Get Action Item Reminders right to your Email Inbox
          </h1>
          <p className="text-sm py-4 text-center">
            Sign up to get a reminder email to your inbox prior to each due
            date?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
