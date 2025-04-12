import React from "react";
import "./Post.scss";
import { randomColor } from "../../utils/randomColor";

interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const Post: React.FC<PostProps> = ({ id, title, body }) => {
    return (
      <div className="post" key={id} style={{backgroundColor: randomColor()}}>
        <div className="post__inner">
          <h2 className="post__title">{title}</h2>
          <p className="post__text">{body}</p>
        </div>
      </div>
    );
};
