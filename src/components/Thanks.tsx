import ThanksSVG from "./ThanksSVG";

export default function Thanks({ rating, totalRatings }: { rating: string; totalRatings: number }) {
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <ThanksSVG classnames="fill-rose-800/70" />
      <div className="border border-rose-800 rounded-full px-5 my-8 text-rose-800 font-semibold font-space-grotesk">
        You selected {rating} out of {totalRatings}
      </div>
      <h2 className="text-gray-300 text-3xl font-extrabold">Thank You!</h2>
      <p className="text-gray-400 font-space-grotesk font-medium my-4 text-center">
        I appreciate you taking the time to give a rating. If you really like this work, please consider giving it a
        star on Github for me!
      </p>
    </div>
  );
}
