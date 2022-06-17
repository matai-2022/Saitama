import React, { useState } from 'react'

function Form(props) {
  const [form, setForm] = useState({
    chorePeople: '',
  })

  function onFormChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function addPerson(event) {
    event.preventDefault()
    props.getFormData({ ...form, table: 'People' })
    setForm({
      chorePeople: '',
    })
  }

  function addChore(event) {
    event.preventDefault()
    props.getFormData({ ...form, table: 'Chores' })
    setForm({
      chorePeople: '',
    })
  }

  return (
    <div className="column">
      <h3> Form </h3>
      <form>
        <input
          type="text"
          name="chorePeople"
          onChange={onFormChange}
          value={form.chorePeople}
        />
        <br></br>
        <button onClick={addPerson}>ADD PERSON</button>
        <button onClick={addChore}>ADD CHORE</button>
      </form>
    </div>
  )
}

export default Form
