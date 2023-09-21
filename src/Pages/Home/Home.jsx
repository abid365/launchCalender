import { info } from "autoprefixer";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const { user, setUser } = useContext(CalendarContext);
  // console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const launchType = form.launchType.value;
    const ads = form.ads.value;
    const course = form.aboutCourse.value;
    const info = {
      date,
      launchType,
      ads,
      course,
    };
    // setUser(info);
    console.log(info);
    // setting value in localstorage
    const value = JSON.stringify(info);
    localStorage.setItem("data", value);
  };
  return (
    <div>
      {/* Upper Secton */}
      <div className="border border-[#a15999] min-h-screen py-10 text-[#a15999]">
        <h1 className="text-4xl font-semibold text-center py-2">
          Launch Calendar
        </h1>
        <p className="text-center text-lg">
          Generate your personalized calendar for upcoming launch
        </p>

        <div className="mt-10">
          {/* form */}
          <form onSubmit={handleSubmit} className="text-center" action="">
            <label className="text-sm block" htmlFor="launchDate">
              When are you going to launch the course? * <br />
            </label>
            {/* first select menu */}
            <button className="px-3 py-2 rounded-lg border border-[#a15999] text-xs my-3">
              Choose a date from this calendar{" "}
              <input className="bg-transparent" type="date" name="date" />
            </button>
            <br />
            {/* second select menu */}
            <label className="text-sm mt-5 block" htmlFor="launchType">
              What type of launch is this ? <br />
            </label>
            <select
              className="px-4 py-2 text-xs rounded-lg my-4 border border-[#a15999] bg-transparent"
              name="launchType"
              id=""
            >
              <option value="webinarLaunch">Webinar Launch</option>
              <option value="challengeLaunch">Challenge Launch</option>
            </select>
            <br />
            {/* paid ads section */}
            <label className="text-sm mt-5 block" htmlFor="paidAds">
              Are you going to run any paid ads?
              <br />
            </label>
            {/* yes */}
            <span className="px-4 mt-4 inline-block">
              <input type="radio" name="ads" value={"yes"} />
              <label className="px-1 text-sm" htmlFor="yes">
                Yes
              </label>
            </span>
            {/* no */}
            <span className="px-4 mt-4 inline-block">
              <input type="radio" name="ads" value={"no"} />
              <label className="text-sm px-1" htmlFor="no">
                No
              </label>
            </span>
            <br />
            {/* course state */}
            <label className="mt-10 text-md block" htmlFor="courseState">
              Is your course live already?
            </label>
            <br />
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-start">
                <div>
                  <input
                    type="radio"
                    id="huey"
                    name="aboutCourse"
                    value="Yes, it's ready to go"
                  />
                  <label className="text-sm px-1" htmlFor="huey">
                    Yes, it's ready to go
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="dewey"
                    name="aboutCourse"
                    value="Not yet, I'm going to finish setting up the course before the launch goes live
                    "
                  />
                  <label className="px-1 text-sm" htmlFor="dewey">
                    Not yet, I'm going to finish setting up the course before
                    the launch goes live
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="louie"
                    name="aboutCourse"
                    value="No, it's not built yet. I'm planning to pre-sell it before actually building the course"
                  />
                  <label className="text-sm px-1" htmlFor="louie">
                    No, it's not built yet. I'm planning to pre-sell it before
                    actually building the course
                  </label>
                </div>
              </div>
            </div>
            <div className="form-control mt-10 flex flex-col items-center">
              {/* <Link to={"/calendar"}>
                {handleSubmit ? (
                  <button className="btn">Sign Up</button>
                ) : (
                  <button disabled className="btn">
                    Sign Up
                  </button>
                )}
              </Link> */}
              <button className="w-fit text-white px-5 py-2 rounded-md text-sm font-semibold tracking-tight bg-[#a15999] hover:bg-[#ff3266]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
