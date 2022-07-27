import "./style.css";

function InformationCard({ name, info }) {
  return (
    <div className="text">
      <span>
        <h1>{name}</h1>
        <h2>{info}</h2>
      </span>
    </div>
  );
}

export default InformationCard;
