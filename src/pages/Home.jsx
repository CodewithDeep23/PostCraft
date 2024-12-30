import React, { useEffect, useState } from "react";
import Service from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents.slice(0, 10));
        console.log(posts.documents)
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="h-full w-full py-8 mt-4 text-center flex items-center">
        <Container>
          <div className="flex flex-wrap p-3">
            <div className="p-8 w-full">
              <h1 className="bg-white text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
