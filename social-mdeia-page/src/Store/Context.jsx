import { createContext, useEffect, useReducer, useState } from "react";

// ager App start per localStorage clear karna hai to is niche wale syntax ko comment out kardo.
// localStorage.removeItem("posts");

// 1. create context
export const ContextAPI = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// reducer function for postlist reducer
const ReducerFunction = (currPost, action) => {
  let NewCurrPost = currPost;

  if (action.type === "SET_POSTS") {
    return action.payload;
  } else if (action.type === "DELETE_POST") {
    NewCurrPost = currPost.filter(
      (postItem) => postItem.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    // SAME POST DONT ADD TWICE
    const exists = currPost.some((p) => p.id === action.payload.id);

    if (exists) return currPost; // 👈 skip duplicate

    return [action.payload, ...currPost];
  }

  return NewCurrPost;
};

// 2. create context provider
const ContextProvider = ({ children }) => {
  // 1.1 Load from localStorage
  const savedPosts =
    JSON.parse(localStorage.getItem("posts")) || DEFAULT_POSTLIST;

  const [selectedTab, setSelectedTab] = useState("Home");

  // 3. state for tab switching
  const [postList, dispatchPostList] = useReducer(ReducerFunction, savedPosts);

  // 1.2 Save to localStorage whenever postList changes
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(postList));
  }, [postList]);

  // set post method
  const setPosts = (fetchedPosts) => {
    dispatchPostList({
      type: "SET_POSTS",
      payload: fetchedPosts,
    });
  };

  // add post method
  const addPost = (newPost) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: newPost,
    });
  };

  // delete post method
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <>
      <ContextAPI.Provider
        value={{
          selectedTab,
          setSelectedTab,
          postList,
          setPosts,
          addPost,
          deletePost,
          dispatchPostList,
        }}
      >
        {children}
      </ContextAPI.Provider>
    </>
  );
};


const DEFAULT_POSTLIST = [];

export default ContextProvider;
