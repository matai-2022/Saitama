import React, { useState } from 'react'

import peopleChores from '../../data/peopleChores'

import Form from './Form'
import People from './People'
import Chores from './Chores'
import Assign from './Assign'

function App() {
  const [formData, setFormData] = useState(peopleChores)
  const [assignVis, setAssignVis] = useState(false)

  function getFormData(form) {
    let newFormData = { ...formData }
    newFormData[form.table].push(form.chorePeople)
    setFormData(newFormData)
  }
  function assignChores() {
    setAssignVis(true)
  }

  return (
    <>
      <div className="dashBoard">
        <People formData={formData} />
        <Form getFormData={getFormData} />
        <Chores formData={formData} />
      </div>
      {assignVis && <Assign formData={formData} />}
      <button onClick={assignChores}>Assign</button>
    </>
  )
}

export default App
