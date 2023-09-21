import React from "react";

const Calendar = () => {
  const commonStyles = `border border-[#a15999] min-h-screen py-10 text-[#a15999]`;

  // pdf downloader of calendar
  const pdfDownload = () => {
    console.log("Pdf is downloading");
  };

  // getting date from local storage
  const value = JSON.parse(localStorage.getItem("data"));
  console.log(value.date);

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
        <div className="py-10 border-y-2 border-[#a15999] my-5"></div>

        {/* preview btn */}
        <div className="flex justify-center">
          <button
            onClick={() => pdfDownload()}
            className="px-6 py-3 rounded-lg bg-[#a15999] text-white text-lg tracking-tight font-semibold hover:bg-[#a15999]"
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
        {/* reminder form */}
        <div className="form-control text-sm">
          <div className="grid grid-cols-2 place-items-center">
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="form-control mt-10 flex items-center">
          <button className="border px-7 py-2 rounded-lg w-fit bg-[#a15999] hover:bg-[#a15999] text-sm text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
