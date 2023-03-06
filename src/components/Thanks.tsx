import ThanksSVG from "./ThanksSVG";

export default function Thanks({ rating }: { rating: string }) {
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <ThanksSVG classnames="fill-rose-800/70" />
      <div>
        You selected {rating} out of {}
      </div>
    </div>
  );
}
