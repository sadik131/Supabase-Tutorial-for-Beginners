import { useEffect, useState } from "react"
import suparbase from "../config/Superbase"
import SmoothieCard from "../components/SmoothieCard"
import { getData } from "../action/action"

const Home = () => {

  const [error, setError] = useState(null)
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getData()
        setProduct(items.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])


  return (
    <div className="page home">
      {error && (<p>{error}</p>)}
      {product && (
        <div className="smoothies">
          {/* order-by buttons */}
          <div className="smoothie-grid">
            {product.map(smoothie => (
              <SmoothieCard key={smoothie.id} smoothie={smoothie} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home