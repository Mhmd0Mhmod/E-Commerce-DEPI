import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className=" flex justify-between border-black border p-4 rounded-lg   ">
      <input
        className="placeholder:text-[#444444] focus:outline-none"
        type="text"
        placeholder="What can we help you to find ?"
      />
      <IoIosSearch className="text-2xl text-[#444444] " />
    </div>
  );
}

export default SearchBar;
