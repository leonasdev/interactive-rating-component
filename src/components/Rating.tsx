function Rating() {
  const scores: string[] = ["1", "2", "3", "4", "5"];

  const scoreButtons = scores.map((e: string) => {
    return (
      <button
        className="text-gray-400 border border-gray-400 w-11 h-11 sm:w-12 sm:h-12 rounded-full hover:bg-white hover:text-black focus:bg-white focus:text-black transition-colors duration-300"
        type="button"
      >
        {e}
      </button>
    );
  });

  return (
    <div>
      <div className="border-2 border-gray-700 p-3 w-fit rounded-full">
        <IconStar />
      </div>
      <img src="../assets/icon-star.svg" alt="" />
      <h1 className="sr-only">Interactive Rating Component</h1>
      <h2 className="text-gray-300 text-3xl font-extrabold my-2">How did we do?</h2>
      <p className="text-gray-400 font-space-grotesk font-medium">
        Please let us know how we did with your support request. All feedback is appreciated to help us imporve our
        offering!
      </p>
      <div className="flex justify-between items-center my-8">
        {scoreButtons}
      </div>
      <div className="bg-gradient-to-br from-blue-700 to-rose-800 p-[1px] rounded-md shadow-md relative">
        <button
          className="uppercase bg-black text-white tracking-widest rounded-md h-10 w-full bg-gradient-to-br from-blue-700/50 to-rose-800/50 opacity-0 hover:opacity-100 z-10 relative transition-opacity duration-300"
          type="submit"
        >
          Submit
        </button>
        {/* Since gradient cannot be transition, we need this fake div under button and use opacity to make a transition effect */}
        <div className="absolute top-0 left-0 w-full h-full rounded-md p-[1px]">
          <div className="uppercase tracking-widest bg-black text-white w-full h-full rounded-md flex justify-center items-center">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

function IconStar() {
  return (
    <svg className="stroke-gray-400 fill-transparent" width="17" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" />
    </svg>
  );
}

export default Rating;
