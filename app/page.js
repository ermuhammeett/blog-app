import {PostCard, Categories, PostWidget, Loader} from "@/components";
import {getPosts} from "@/services";
import FeaturedPosts from "@/sections/FeaturedPosts";
export default async function Home() {
    const posts=(await getPosts()) || [];
    console.log(posts[0]);
    if (!posts) {
        return <Loader/>;
    }
    return (
      <div className="container mx-auto px-10 mb-8">
          <FeaturedPosts/>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 col-span-1">
                  {posts.map((post,index)=><PostCard post={post.node} key={index}/>)}
              </div>
              <div className="lg:col-span-4 col-span-1">
                  <div className="lg:sticky relative top-8">
                      <PostWidget/>
                      <Categories/>
                  </div>
              </div>
          </div>
      </div>
   )
}
