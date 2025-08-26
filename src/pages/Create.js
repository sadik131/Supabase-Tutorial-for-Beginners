import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/Superbase"
import { addItem } from "../action/action"

const Create = () => {
  const navigate = useNavigate()

  const [name, setTitle] = useState('')
  const [text, setMethod] = useState('')
  const [stock, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !text || !stock) {
      return setFormError('Please fill in all the fields correctly')
    }
    const createData = await addItem(name, text, stock)
    if (createData) {
      setFormError(null)
      navigate('/')
    }
  }

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
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

        <button>Create Smoothie Recipe</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Create