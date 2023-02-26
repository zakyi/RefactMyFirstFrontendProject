import { useEffect, useState, useRef } from "react";
import CommentItem from "./CommentItem";
import Button from "./Button";
import {
  useSendImageCommentMutation,
  useFetchImageCommentsMutation,
  setCurrentPath,
  setModalVisible,
} from "../store";
import { useSelector, useDispatch } from "react-redux";
import "./CommentArea.css";

function CommentArea({ imageId }) {
  const dispatch = useDispatch();
  const { email, token, isLoggedIn } = useSelector((state) => state.userData);
  const { currentPath } = useSelector((state) => state.page);
  const [commentResult, setCommentResult] = useState([]);
  const [sendComment, sendCommentResult] = useSendImageCommentMutation();
  const [commentText, setCommentText] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [fetchComments, fetchCommentsResult] = useFetchImageCommentsMutation();

  useEffect(() => {
    fetchComments({ imageId });
  }, [refresh]);

  useEffect(() => {
    if (sendCommentResult.isSuccess) {
      setRefresh(refresh + 1);
    }
  }, [sendCommentResult.isLoading]);

  useEffect(() => {
    if (fetchCommentsResult.isSuccess) {
      setCommentResult(
        JSON.parse(JSON.stringify(fetchCommentsResult.data)).reverse()
      );
    }
  }, [fetchCommentsResult.isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendComment({ userId: email, imageId, comment: commentText, token });
  };

  const handleChangeText = (e) => {
    setCommentText(e.target.value);
  };

  // 点击评论区，未登录就重定向到login，并且隐藏Modal
  const handleInputClick = (e) => {
    if (!isLoggedIn) {
      dispatch(setCurrentPath("/login"));
      dispatch(setModalVisible(false));
    }
  };

  const commentList = commentResult.map((comment) => {
    const { content, userEmail } = comment;
    return (
      <div>
        <CommentItem content={content} userId={userEmail} />
      </div>
    );
  });

  return (
    <div>
      <div className="comment-form-container">
        <form
          // id="comment--form"
          className="comment-form"
          onSubmit={handleSubmit}
        >
          <input
            onFocus={handleInputClick}
            className="comment-input"
            value={commentText}
            onChange={handleChangeText}
            placeholder="Comment"
            // form="comment--form"
          />
          <Button type="secondary" decoration="rounded">
            Submit
          </Button>
        </form>
      </div>
      <div className="comments-container">{commentList}</div>
    </div>
  );
}

export default CommentArea;
