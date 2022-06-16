import React from 'react'

function Chores(props) {
  return (
    <>
      <div>
        {props.formData.Chores.map((chore, i) => {
          return <li key={i}>{chore}</li>
        })}
      </div>
    </>
  )
}

export default Chores
