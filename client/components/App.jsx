import React from 'react'

import Form from './Form'

function App() {
  function getFormData(form) {
    console.log(form, 'app.jsx')
  }
  return (
    <>
      <div>
        <h1>This is the start of our amazing app</h1>
        <Form getFormData={getFormData} />
      </div>
    </>
  )
}

export default App
