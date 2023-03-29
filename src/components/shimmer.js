const Shimmer = () => {
  return (
    // <h1>Loading----------------------</h1>
    <div className="flex flex-wrap gap-6 m-6">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-[200px] h-52 bg-gray-200"></div>
        ))}
    </div>
  );
};

export default Shimmer;
