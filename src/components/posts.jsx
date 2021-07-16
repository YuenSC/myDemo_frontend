import React, { Component } from "react";

import HttpService from "../services/httpService";
import { apiUrl } from "../config.json";

const postUrl = apiUrl + "posts";

class Posts extends Component {
  state = { posts: [] };

  async componentDidMount() {
    const { data: posts } = await HttpService.get(postUrl);
    console.log(posts);
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <h1>There are {posts.length} posts</h1>
        <table className="table text-start">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">Content</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Posts;
