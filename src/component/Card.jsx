import "./Card.css";
export default function Card({ repo }) {
  return (
    <div className="card">
      {console.log(repo)}
      <p className="title_card">{repo.name}</p>
      <p className="desc">{repo.descrption}</p>
      <div className="card_footer">
        <p>
          <img src="/asset/Nesting.svg" /> <span>{repo.nesting}</span>
        </p>
      </div>
    </div>
  );
}
