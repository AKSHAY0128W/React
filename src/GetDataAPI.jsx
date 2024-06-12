import React, { useEffect, useState } from "react";
import LocalApi from "./localApi.jsx";
import { Spinner } from "react-bootstrap";
import "./App.css";

function GetDataAPI() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);

  // Create Post
  const handleCreate = () => {
    LocalApi.createPost(newPost)
      .then((response) => {
        setPosts([...posts, response.data]);
        newPost({ title: "", body: "" });
      })
      .catch((error) => {
        console.error("Error Creating Post", error);
      });
  };

  // GET Request or Read Data
  useEffect(() => {
    LocalApi.getPosts()
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  // Update Post
  const handleUpdate = (postID, updateData) => {
    setLoading(true);
    LocalApi.updatePost(postID, updateData)
      .then((response) => {
        const updatePosts = posts.map((post) =>
          post.id === postID ? response.data : post
        );
        setPosts(updatePosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Updating Post", error);
        setLoading(false);
      });
  };

  // Delete Post
  const handleDelete = (postID) => {
    setLoading(true);
    LocalApi.deletePost(postID)
      .then((response) => {
        const updatePosts = posts.filter((post) => post.id !== postID);
        setPosts(updatePosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Deleting Post", error);
        setLoading(false);
      });
  };

  return (
    <div className={loading ? "loader-container" : ""}>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      ) : (
        <>
          <hr />
          <h1 className="text-center">Posts</h1>
          <hr />
          <div className="m-5">
            <h3>Create New Posts</h3>
            <input
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
            />

            <br />
            <br />
            <br />

            <input
              type="text"
              placeholder="body"
              value={newPost.body}
              onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            />

            <button onClick={handleCreate}>Create</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleUpdate(post.id, {
                          title: "updated title",
                          body: "update Body",
                        })
                      }
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(post.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default GetDataAPI;
