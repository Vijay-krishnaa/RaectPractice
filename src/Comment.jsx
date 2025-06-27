import React, { useState } from "react";

function Comment() {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddChange = (e) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      text: input.trim(),
      liked: false,
      replyText: "",
      replies: [],
    };
    setComments([...comments, newComment]);
    setInput("");
  };

  const toggleLike = (id) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, liked: !comment.liked } : comment
      )
    );
  };

  const handleReplyChange = (id, value) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, replyText: value } : comment
      )
    );
  };

  const handleAddReply = (e, commentId) => {
    e.preventDefault();
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id !== commentId) return comment;

        const replyText = comment.replyText.trim();
        if (!replyText) return comment;

        const newReply = { id: Date.now(), text: replyText };
        return {
          ...comment,
          replies: [...comment.replies, newReply],
          replyText: "",
        };
      })
    );
  };

  return (
    <>
      <h1>Comment Here</h1>
      <form onSubmit={handleAddChange}>
        <input
          type="text"
          placeholder="Comment here...!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>

      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <button
            onClick={() => toggleLike(comment.id)}
            style={{ color: comment.liked ? "red" : "black" }}
          >
            Like
          </button>

          <form onSubmit={(e) => handleAddReply(e, comment.id)}>
            <input
              type="text"
              value={comment.replyText}
              onChange={(e) => handleReplyChange(comment.id, e.target.value)}
            />
            <button type="submit">Reply</button>
          </form>

          {comment.replies.length > 0 && (
            <ul>
              {comment.replies.map((reply) => (
                <li key={reply.id}>{reply.text}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}

export default Comment;
