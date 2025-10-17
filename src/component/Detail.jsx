export default function Detail({ repo }) {
  return (
    <div className="detail">
      <h2>{repo.full_name}</h2>
      <p>{repo.description}</p>
      <p>Forks: {repo.forks}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Open Issues: {repo.open_issues_count}</p>
    </div>
  );
}
