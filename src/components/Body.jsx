import { useState } from 'react'

export default function Body({ title }) {

  const [item, setItem] = useState("")
  const [list, setList] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    if (item.trim() === "") return

    setList([...list, item])
    setItem("")
  }

  return (
    <>
     <div className="body-container">

      <h2 className="list-title">
        What {title}
      </h2>

      <form className="list-form" onSubmit={handleSubmit}>

        <input
          className="list-input"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <button className="list-button" type="submit">
          Add To List
        </button>

      </form>

      <ul className="list-items">
        {list.map((listItem, index) => (
          <li className="list-item" key={index}>
            {listItem}
          </li>
        ))}
      </ul>

    </div>
    </>
    )
}   
  
