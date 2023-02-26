import "./CommentItem.css";
import { RxAvatar } from "react-icons/rx";

function CommentItem({ content, userId, time }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
  };
  const locale = navigator.language;
  const newtime = new Intl.DateTimeFormat(locale, options).format(
    new Date(time)
  );

  return (
    <div className="comment-items-container">
      <div className="comment-item-avatar">
        <RxAvatar />
      </div>
      <div className="comment-item-user-id">
        <p>{userId}</p>{" "}
      </div>
      <div className="comment-item-content">{content}</div>
      <div className="comment-item-time">
        <p>{newtime}</p>
      </div>
    </div>
  );
}

export default CommentItem;
