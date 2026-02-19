import Post from "./Post";
import { useContext } from "react";
import { ContextAPI } from "../Store/Context";

const PostGroup = () => {
  const { postList } = useContext(ContextAPI);

  return (
    <div className="PostDiv">
      {postList.map((postItem) => (
        <Post key={postItem.id} postItem={postItem} />
      ))}
    </div>
  );
};

export default PostGroup;
