import "./MainContent.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import Loading from "./Loading";
function MainContent({ users, query }) {
  const [user, setUser] = useState(users[0]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      setIsLoading(true);
      users.map((u) => {
        if (u.userName == query) {
          setUser(u);
          return setIsLoading(false);
        }
        setIsLoading(false);
      });
    },
    [query, users]
  );
  const repos = user.repositories;
  console.log(user);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="main">
          <div className="profile">
            <img src={user.img || "img"} alt="profile" />
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
            {repos.map((repo) => {
              console.log(repo);
              if (repo) {
                return <Card repo={repo} />;
              }
            })}
          </div>
        </div>
      )}
    </>
  );
}
export default MainContent;
