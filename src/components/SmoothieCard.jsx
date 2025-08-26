import { Link } from "react-router-dom"

const SmoothieCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h3>{smoothie.name}</h3>
      <p>{smoothie.text}</p>
      <div className="rating">{smoothie.stock}</div>
      <Link to={`/${smoothie.id}`}>
        <i className="material-icons">edit</i>
      </Link>
    </div>
  )
}

export default SmoothieCard