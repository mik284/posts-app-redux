import React from "react";
import { useSelector } from "react-redux";
// import { TotalLikes } from "../redux/actions/postActions";

const Header = () => {
  const { posts, count} = useSelector((state) => state.postState);

  return (
    <div className="bg-indigo-900 p-5 h-20">
      <div className="max-w-6xl mx-auto flex items-center text-white justify-between">
        <h3 className="font-bold text-xl  uppercase">Post App</h3>
        <span className="bg-white h-6  flex justify-center text-black p-1 items-center rounded-full">
          Total: {posts?.length}
        </span>
        <span className="bg-white h-6  flex justify-center text-black p-1 items-center rounded-full">
          Total Likes: {count}
        </span>
      </div>
    </div>
  );
};

export default Header;
