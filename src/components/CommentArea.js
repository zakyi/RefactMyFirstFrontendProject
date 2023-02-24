import { useEffect, useState, useRef } from "react";
import CommentItem from "./CommentItem";
import Button from "./Button";
import {
  useSendImageCommentMutation,
  useFetchImageCommentsMutation,
} from "../store";
import { useSelector } from "react-redux";

function CommentArea({ imageId }) {
  const { email, token } = useSelector((state) => state.userData);
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
          id="comment--form"
          className="comment-form"
          onSubmit={handleSubmit}
        >
          <textarea
            className="comment-textarea"
            value={commentText}
            onChange={handleChangeText}
            form="comment--form"
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
