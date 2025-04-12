import { PostI } from "../../types";

export const getPosts = async (): Promise<PostI[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: PostI[] = await res.json();
    return data;
};
