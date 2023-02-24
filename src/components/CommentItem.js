import "./CommentItem.css";
import { RxAvatar } from "react-icons/rx";

function CommentItem({ content, userId }) {
  return (
    <div className="comment-items-container">
      <div className="comment-item-avatar">
        <RxAvatar />
      </div>
      <div className="comment-item-user-id">{userId} </div>
      <div className="comment-item-content">{content}</div>
    </div>
  );
}

export default CommentItem;
