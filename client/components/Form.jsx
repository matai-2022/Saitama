import React, { useState } from 'react'

function Form(props) {
  // make another button done
  // get form data
  // pass form data into app.jsx
  // clear text field

  const [form, setForm] = useState({
    chorePeople: '',
  })

  function onFormChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function addPerson(event) {
    event.preventDefault()
    props.getFormData(form)
    setForm({
      chorePeople: '',
    })
  }

  function addChore(event) {
    event.preventDefault()
  }

  return (
    <form>
      <input
        type="text"
        name="chorePeople"
        onChange={onFormChange}
        value={form.chorePeople}
      />
      <button onClick={addPerson}>ADD Person</button>
      <button onClick={addChore}>ADD Chore</button>
    </form>
  )
}

export default Form
