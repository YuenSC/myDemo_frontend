import React, { Component } from "react";

import HttpService from "../services/httpService";
import { apiUrl } from "../config.json";
import Pagination from "./common/pagination";
import scrollToTop from "./../js/scrollToTop";

const postUrl = apiUrl + "posts";

class Posts extends Component {
  state = {
    posts: [],
    pageSize: 20,
    currentPage: 1,
  };

  async componentDidMount() {
    const { data: posts } = await HttpService.get(postUrl);
    console.log(posts);
    this.setState({ posts, itemsCount: posts.length });
  }

  handlePageChange = (page) => {
    const { posts, pageSize, currentPage } = this.state;

    switch (page) {
      case "previous":
        if (currentPage > 1) this.setState({ currentPage: currentPage - 1 });
        break;
      case "next":
        if (currentPage < Math.ceil(posts.length / pageSize))
          this.setState({ currentPage: currentPage + 1 });
        break;
      default:
        this.setState({ currentPage: page });
    }
    scrollToTop();
  };

  render() {
    const { posts: allPosts, pageSize, currentPage } = this.state;
    const posts = this.getPageItems(currentPage, pageSize, allPosts);
    return (
      <div className="container">
        <h1>There are {allPosts.length} posts</h1>
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
        <Pagination
          itemsCount={allPosts.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }

  getPageItems(currentPage, pageSize, allPosts) {
    const start = (currentPage - 1) * pageSize;
    const end = currentPage * pageSize;
    const posts = allPosts.slice(start, end);
    return posts;
  }
}

export default Posts;
