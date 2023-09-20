import React, { useContext } from "react";
import { CalendarContext } from "../../providers/CalendarProvider";


const Home = () => {
  
  const {user,setUser}=useContext(CalendarContext)
  console.log(user)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const form=e.target
    const date=form.date.value
    const launchType=form.launchType.value
    const ads=form.ads.value
    const drone=form.drone.value
     const info={
      date,
      launchType,
      ads,drone
    }
    setUser(info)
    
  }
  return (
    <div>
      {/* Upper Secton */}
      <div className="border border-red-400 min-h-screen py-10 text-[#ff6081]">
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
            <button className="px-3 py-2 rounded-lg border border-[#ff6081] text-xs my-3">
              Choose a date from this calendar{" "}
              <input className="bg-transparent" name="date" type="date" />
            </button>{" "}
            <br />
            {/* second select menu */}
            <label className="text-sm mt-5 block" htmlFor="launchType">
              What type of launch is this ? <br />
            </label>
            <select
              className="px-4 py-2 text-xs rounded-lg my-4 border border-[#ff6081] bg-transparent"
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
            <div>
                <input type="submit" value="Submit" />
              </div>
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
            <label className="mt-10 text-sm block" htmlFor="courseState">
              Is your course live already?
            </label>
            <br />
            {/* <div className="flex flex-col justify-center items-center">
              <div>
                <input type="radio" name="courseState" />
                <label className="px-1 text-xs text-left" htmlFor="yesRedy">
                  Yes, it's ready to go
                </label>{" "}
              </div>
              <br />
              <div>
                <input type="radio" name="courseState" />
                <label className="px-1 text-xs text-left" htmlFor="notYet">
                  Not yet, I'm going to finish setting up the course before the{" "}
                  <br />
                  launch goes live
                </label>
              </div>
              <br />
              <div>
                <input type="radio" name="preSell" />
                <label className="text-xs px-1 text-left" htmlFor="preSell">
                  No, it's not built yet. I'm planning to pre-sell it before
                  actually building the course
                </label>
              </div>
            </div> */}
            <div className="flex flex-col items-center border border-emerald-400 w-fit">
              <div>
                <input type="radio" id="huey" name="drone" value="huey" />
                <label for="huey">Huey</label>
              </div>
              <div>
                <input type="radio" id="dewey" name="drone" value="dewey" />
                <label for="dewey">Dewey</label>
              </div>
              <div>
                <input type="radio" id="louie" name="drone" value="louie" />
                <label for="louie">Louie</label>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
