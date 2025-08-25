const SmoothieCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h3>{smoothie.name}</h3>
      <p>{smoothie.text}</p>
      <div className="rating">{smoothie.stock}</div>
    </div>
  )
}

export default SmoothieCard