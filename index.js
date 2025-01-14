const express = require("express");
require("dotenv").config(); //loads .env file into process.env
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/bio", (req, res) => {
  res.send("bio");
});

app.get("/git", (req, res) => {
  res.json({ data: data });
});

const data = {
  login: "kaustubhdeokar",
  id: 31384557,
  node_id: "MDQ6VXNlcjMxMzg0NTU3",
  avatar_url: "https://avatars.githubusercontent.com/u/31384557?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/kaustubhdeokar",
  html_url: "https://github.com/kaustubhdeokar",
  followers_url: "https://api.github.com/users/kaustubhdeokar/followers",
  following_url:
    "https://api.github.com/users/kaustubhdeokar/following{/other_user}",
  gists_url: "https://api.github.com/users/kaustubhdeokar/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/kaustubhdeokar/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/kaustubhdeokar/subscriptions",
  organizations_url: "https://api.github.com/users/kaustubhdeokar/orgs",
  repos_url: "https://api.github.com/users/kaustubhdeokar/repos",
  events_url: "https://api.github.com/users/kaustubhdeokar/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/kaustubhdeokar/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Kaustubh Deokar",
  company: "Siemens Digital Industries",
  blog: "https://kaustubhdeokar.github.io/myblog/",
  location: "Hyderabad",
  email: null,
  hireable: true,
  bio: "Software Developer, Siemens\r\nkaustubhd9@gmail.com",
  twitter_username: null,
  public_repos: 49,
  public_gists: 7,
  followers: 23,
  following: 83,
  created_at: "2017-08-27T10:53:49Z",
  updated_at: "2025-01-04T12:33:37Z",
};

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
