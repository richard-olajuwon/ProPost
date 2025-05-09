import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BPost from "./BPost";
import api from "../api";
import Spinner from "./Spinner";

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchposts = async () => {
      try {
        const res = await api.get("api/posts/latest-post/");
        setPosts(res.data);
      } catch (error) {
        console.log("error occured during fetch the post", error);
      } finally {
        setLoading(false);
      }
    };
    fetchposts();
  }, []);
  return (
    <>
      <section className="section feature" aria-label="feature" id="featured">
        <div className="container">
          <h2 className="headline headline-2 section-title">
            <span className="span">Latest Posts</span>
          </h2>

          <p className="section-text">
            Explore Our Latest Insights and Stories
          </p>
          {loading ? (
            <Spinner loading={loading}></Spinner>
          ) : (
            <ul className="feature-list">
              {posts.map((post) => (
                <BPost key={post.id} post={post}></BPost>
              ))}
            </ul>
          )}

          <Link to="/blogposts" className="btn btn-secondary">
            <span className="span">Show More Posts</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
