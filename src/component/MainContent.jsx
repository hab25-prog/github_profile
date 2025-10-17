import "./MainContent.css";
import Card from "./Card";
// import { useState } from "react";
import Loading from "./Loading";
import { useState, useEffect } from "react";
function MainContent({ user }) {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function fetchRepos() {
      const res = await fetch(user.repos_url);
      const data = await res.json();
      console.log(data);
      setRepos(data);
    }
    fetchRepos();
  }, [user]);
  if (!user || user.message === "Not Found") {
    return <p className="error">User not found or loading...</p>;
  }

  return (
    <>
      <div className="main">
        <div className="profile">
          <img src={user.avatar_url} alt="profile" />
        </div>
        <div className="userInfo">
          <p className="tabbe">
            follower <span>{user.followers}</span>
          </p>
          <p className="tabbe">
            following <span>{user.following}</span>
          </p>
          <p className="tabbe">
            location <span>{user.location}</span>
          </p>
        </div>
        <div className="title">
          <h1>GitHub</h1>
          <p>How people build software</p>
        </div>
        <div className="section">
          {repos?.map((repo, i) => {
            if (repo) {
              return <Card key={i} repo={repo} />;
            }
          })}
        </div>
      </div>
    </>
  );
}
export default MainContent;
