import "./Card.css";
export default function Card({ repo }) {
  return (
    <div className="card">
      <p className="title_card">{repo.full_name}</p>
      <p className="desc">{repo.description}</p>
      <div className="card_footer">
        <p>
          <img src="/asset/Nesting.svg" /> <span>{repo.forks}</span>
        </p>
      </div>
    </div>
  );
}
