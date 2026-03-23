function ItemList() {

  const items = ["HTML", "CSS", "JavaScript", "React"]

  return (
    <div>
      <h2>My Skills</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default ItemList