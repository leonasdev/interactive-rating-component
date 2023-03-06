import { useState } from "react";
import Survey from "./components/Survey";
import Thanks from "./components/Thanks";

function App() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [rating, setRating] = useState<string>("");
  const [totalRatings, setRatingTotal] = useState<number>(0);

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-1 justify-center items-center">
        <main className="border border-wi border-gray-700 w-[20rem] xs:w-[26rem] rounded-3xl p-8 xs:m-8 shadow-[0_0px_200px_-30px] shadow-rose-800/60 backdrop-blur relative">
          <div className="w-[100%] h-[100%] absolute top-1/2 left-1/2 z-[-10] translate-x-[-50%] translate-y-[-50%] rounded-full bg-gradient-to-b from-rose-800/50 blur-[200px]">
          </div>
          {isSubmitted
            ? <Thanks rating={rating} totalRatings={totalRatings} />
            : (
              <Survey
                onSubmitRating={(currentRating: string, total: number) => {
                  setRating(currentRating);
                  setRatingTotal(total);
                  setIsSubmitted(true);
                }}
              />
            )}
        </main>
      </div>
      <footer className="text-white text-xs">
        Coded by<a
          href="https://github.com/leonasdev"
          target="_blank"
          rel="noopener"
          className="text-transparent font-extrabold bg-clip-text text-sm bg-gray-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-rose-800"
        >
          {" "}leonasdev
        </a>
      </footer>
    </div>
  );
}

export default App;
