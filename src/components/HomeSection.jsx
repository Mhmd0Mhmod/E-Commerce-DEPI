function HomeSection({ label, children }) {
  return (
    <div className=" w-full">
      <div className="flex justify-between items-center   border-gray-B4B4B4 ">
        <h3 className="text-4xl font-medium">{label}</h3>
        <button>View All &gt; </button>
      </div>
      <div className="bg-gray-B4B4B4 h-[3px] rounded-full mt-5"></div>
      {children}
    </div>
  );
}

export default HomeSection;
