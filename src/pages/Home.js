import { useEffect ,useState} from "react"
import suparbase from "../config/Superbase"
import SmoothieCard from "../components/SmoothieCard"

const Home = () => {

  const [error, setError] = useState(null)
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await suparbase
          .from("items")
          .select()
      if (error) setError("something went wrong")
      if (data) setProduct(data)
    }
    fetchItems()
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