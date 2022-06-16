import React, { useState } from 'react'

import peopleChores from '../../data/peopleChores'

import Form from './Form'
import People from './People'
import Chores from './Chores'

function App() {
  const [formData, setFormData] = useState(peopleChores)

  function getFormData(form) {
    let newFormData = { ...formData }
    newFormData[form.table].push(form.chorePeople)
    setFormData(newFormData)
  }

  return (
    <>
      <div>
        <h1>This is the start of our amazing app</h1>
        <Form getFormData={getFormData} />
        <People formData={formData} />
        <Chores formData={formData} />
      </div>
    </>
  )
}

export default App
