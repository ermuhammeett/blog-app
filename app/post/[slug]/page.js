import React from 'react';
import {getPosts,getPostDetails} from "@/services"
import PostDetails from "@/components/PostDetails";
const PostPage = async ({ params }) => {
    const post = await getPostDetails(params.slug);
    return <PostDetails post={post} />;
};
export async function getStaticPaths(){
    const posts=await getPosts();
    return{
        paths:posts.map(({node:{slug}})=>({params:{slug}})),
        fallback:'blocking',//false-true
    }
}
export default PostPage;