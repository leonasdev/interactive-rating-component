import { useState } from "react";
import Survey from "./components/Survey";
import Thanks from "./components/Thanks";

function App() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [rating, setRating] = useState<string>("");

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="border border-wi border-gray-700 w-[26rem] rounded-3xl p-8 m-8 shadow-[0_0px_200px_-30px] shadow-rose-800/60 backdrop-blur relative">
        <div className="w-[120%] h-[150%] absolute top-1/2 left-1/2 z-[-10] translate-x-[-50%] translate-y-[-50%] rounded-full bg-gradient-to-b from-rose-800/50 blur-[200px]">
        </div>
        {isSubmitted
          ? <Thanks rating={rating} />
          : (
            <Survey
              onSubmitRating={(currentRating: string) => {
                setRating(currentRating);
                setIsSubmitted(true);
              }}
            />
          )}
      </div>
    </div>
  );
}

export default App;
