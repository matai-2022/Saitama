import React from 'react'

function People(props) {
  return (
    <>
      <div>
        {props.formData.People.map((person, i) => {
          return <li key={i}>{person}</li>
        })}
      </div>
    </>
  )
}

export default People
