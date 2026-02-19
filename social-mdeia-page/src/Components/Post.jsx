import { useContext } from "react";
import cardImg from "../assets/cardImg.jpg";
import { RxCross2 } from "react-icons/rx";
import { ContextAPI } from "../Store/Context";

const Post = (props) => {
  const { postItem } = props;
  const { deletePost } = useContext(ContextAPI);

  return (
    <div className="PostCard">
      <div className="card" style={{ width: "22rem", height: "16rem" }}>
        <img src={cardImg} className="card-img-top CardPicEdit" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {postItem.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(postItem.id)}
            >
              <RxCross2 />
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{postItem.body}</p>
          {postItem.tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="badge text-bg-primary TagClass"
            >
              {tag}
            </span>
          ))}
          <span className="badge text-bg-secondary reactionSpan">
            {postItem.reactions}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Post;
