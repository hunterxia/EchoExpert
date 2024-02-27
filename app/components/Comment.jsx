import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Comment = ({ commentData }) => {
  return (
    <div className="flex items-center space-x-4 p-3 border-b">
      <Avatar>
        <AvatarImage src={commentData.avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h5 className="font-bold">{commentData.username}</h5>
        <span className="text-sm text-gray-500">{commentData.date}</span>
        <p>{commentData.additionalFeedback}</p>
      </div>
    </div>
  );
};

export default Comment;
