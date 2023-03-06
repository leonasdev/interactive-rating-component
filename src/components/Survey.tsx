import { useState } from "react";
import StarIconSVG from "./StarIconSVG";

interface SurveyProps {
  onSubmitRating: (currentRating: string, total: number) => void;
}

export default function Survey(props: SurveyProps) {
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [currentRating, setCurrentRating] = useState<string>("");
  const ratingList: string[] = ["1", "2", "3", "4", "5"];

  const ratingButton = (rating: string) => {
    return (
      <label key={rating} className="relative flex justify-center items-center cursor-pointer" htmlFor={rating}>
        <input
          type="radio"
          name="rating"
          id={rating}
          value={rating}
          className="appearance-none border border-gray-400 w-11 h-11 xs:w-12 xs:h-12 rounded-full hover:bg-white hover:text-black transition-colors duration-300 checked:bg-white cursor-pointer peer"
          onClick={(event) => {
            if (rating === currentRating) {
              event.currentTarget.checked = false;
              setCurrentRating("");
              setSubmitDisabled(true);
            } else {
              setCurrentRating(rating);
              setSubmitDisabled(false);
            }
          }}
        />
        <span className="text-gray-400 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none peer-hover:text-black peer-checked:text-black">
          {rating}
        </span>
      </label>
    );
  };

  return (
    <div>
      <h1 className="sr-only">Interactive Rating Component</h1>
      <div className="border-2 border-gray-700 p-3 w-fit rounded-full">
        <StarIconSVG classnames="stroke-gray-400 fill-transparent" />
      </div>
      <h2 className="text-gray-300 text-3xl font-extrabold my-2">How did I do?</h2>
      <p className="text-gray-400 font-space-grotesk font-medium">
        I implemented this component based on Vercel's design. Could you take a moment to rate it for me? Your feedback
        is very useful to me. Thank you!
      </p>
      <div className="flex justify-between items-center my-8">
        {ratingList.map(ratingButton)}
      </div>
      <div
        className={`p-[1px] rounded-md shadow-md relative ${
          submitDisabled ? "bg-[#333333]" : "bg-gradient-to-br from-blue-700 to-rose-800"
        }`}
      >
        <button
          className={`uppercase bg-black text-white tracking-widest rounded-md h-10 w-full bg-gradient-to-br from-blue-700/50 to-rose-800/50 opacity-0 z-10 relative transition-opacity duration-300 peer ${
            submitDisabled ? "" : "hover:opacity-100 "
          }`}
          disabled={submitDisabled}
          type="submit"
          onClick={(event) => {
            event.preventDefault();

            if (currentRating) {
              props.onSubmitRating(currentRating, ratingList.length);
            }
          }}
        >
          Submit
        </button>
        {/* Since gradient cannot be transition, we need this fake div under button and use opacity to make a transition effect */}
        <div className="absolute top-0 left-0 w-full h-full rounded-md p-[1px]">
          <div
            className={`uppercase tracking-widest w-full h-full rounded-md flex justify-center items-center ${
              submitDisabled ? "bg-[#111111] text-[#444444]" : "bg-black text-white"
            }`}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}
