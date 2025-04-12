import "./PostsFeed.scss";
import { getPosts } from "../../services/api/api";
import { Post } from "../../components/Post";
import { useEffect, useState } from "react";
import { PostI } from "../../types";
import { TaskHeader } from "../../components/TaskHeader";
import { useLocation } from "react-router";

export const PostsFeed = () => {
    const location = useLocation();
    const TaskHeaderTitle = location.state?.title || "Morsss' sandbox";
    const [posts, setPosts] = useState<PostI[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = getPosts();
            setPosts(await data);
        };

        fetchPosts();
    }, []);
    return (
        <>
            <TaskHeader title={TaskHeaderTitle} />
            <div className="posts__wrapper">
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        userId={post.userId}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                    />
                ))}
            </div>
        </>
    );
};
