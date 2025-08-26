import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import supabase from "../config/Superbase"
import { findById } from "../action/action"

const Update = () => {

  const { id } = useParams()
  const [name, setTitle] = useState('')
  const [text, setMethod] = useState('')
  const [stock, setRating] = useState('')

  useEffect(() => {
    const fetchSmoothie = async () => {
     const item = await findById(id)
     setTitle(item.data.name)
     setMethod(item.data.text)
      setRating(item.data.stock)
    }
    fetchSmoothie()
  }, [id, id])

  return (
    <div className="page update">
      <form onSubmit={() => { }}>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="text">text:</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="stock">stock:</label>
        <input
          type="number"
          id="stock"
          value={stock}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Update Smoothie Recipe</button>

        {/* {formError && <p className="error">{formError}</p>} */}
      </form>
    </div>
  )
}

export default Update