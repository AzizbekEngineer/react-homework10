import React from "react";
import useFetch from "../../../hooks/datafetch";
import AdminTop from "../../../components/adminTop/AdminTop";

const Post = () => {
  let title = "Post";
  let { data, loading, error } = useFetch(`/posts`);
  let postData = data?.posts.map((post) => {
    return (
      <tr className="table__row" key={post.id}>
        <td>{post.title}</td>
        <td>{post.tags[0]}</td>
        <td>{post.tags[1]}</td>
        <td>{post.tags[2]}</td>
        <td>{post.reactions}</td>
      </tr>
    );
  });
  return (
    <div className="container">
      <AdminTop title={title} />
      <div className="Users">
        <div className="user">
          <table className="table">
            <thead className="table__head">
              <tr className="table__row">
                <th>Name</th>
                <th>info1</th>
                <th>info2</th>
                <th>info3</th>
                <th>reactions</th>
              </tr>
            </thead>
            <tbody className="table__body">{postData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Post;
