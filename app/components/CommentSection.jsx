import React from "react";
import Comment from "./Comment";

const CommentSection = ({ comments, loading }) => {
  const hasComments = comments && comments.length > 0;

  return (
    <div>
      {loading ? (
        <div className="text-center py-6">
          <p>Loading comments...</p>
        </div>
      ) : hasComments ? (
        <div className="space-y-2">
          {comments.map((comment, index) => (
            <Comment key={index} commentData={comment} />
          ))}
        </div>
      ) : (
        <div className="text-center py-6 bg-gray-100 rounded-md">
          <p>No comments yet. Be the first to comment!</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
