import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../redux/actions/postActions";
import {FaHeart, FaStar} from 'react-icons/fa'
import { toast } from "react-toastify";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const dispatch = useDispatch();
  const { favorite } = useSelector((state) => state.postState);

  const handleAddPost = () => {
    // Validate the inputs

    const id = Math.floor(Math.random() * 136736723);
    dispatch(createPostAction({ title, post, id, likes: 0 }));

    setTitle("");
    setPost("");
    toast.success("Created a new Post")
  };

  return (
    <div className="content flex flex-row">
      <div className="bg-white max-w-2xl mx-auto w-80 my-10 p-6 rounded-lg">
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 border mt-1"
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="title">Post</label>
          <input
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="p-3 border mt-1"
            type="text"
            placeholder="Enter post"
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleAddPost}
            className="bg-[#00a47e] text-white p-2 px--6 rounded-md"
          >
            Submit Post
          </button>
        </div>
      </div>

      <div className="content2 pr-20">
        <div className="bg-white max-w-2xl mx-auto w-80 my-10 p-6 rounded-lg ">
          <div className="favourite">
            <h3 className="font-bold text-center flex justify-center items-center gap-2 p-2 mb-2"><FaStar />Favorite Posts</h3>
            {favorite?.map((fav) => {
              return (
                <>
                  <div className="flex-1">
                    <h2 className="font-bold flex justify-between max-w-lg mb-2 bg-gray-200 p-2">
                      <p>{fav?.title}</p>
                      <div className="flex items-center gap-2"><FaHeart />likes: {fav?.likes} </div>
                    </h2>
                    <p>{fav?.post}</p>
                  </div>
                  <div className="flex  gap-2">
                    
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPostForm;
