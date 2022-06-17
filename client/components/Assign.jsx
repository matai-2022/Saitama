import React from 'react'

function Assign(props) {
  //make a function that assigns chores
  //display in a list
  let task = {}

  function assignChores(props) {
    let tasks = {}
    let shufflePeople = shuffle(props.formData.People)
    props.formData.Chores.forEach((chore, i) => {
      if (!tasks[shufflePeople[i % shufflePeople.length]]) {
        tasks[shufflePeople[i % shufflePeople.length]] = [chore]
      } else {
        tasks[shufflePeople[i % shufflePeople.length]].push(chore)
      }
    })
    return tasks
  }

  task = assignChores(props)

  const people = Object.keys(task)
  console.log(people)

  return (
    <>
      <div className="column">
        <ul>
          {people.map((person, i) => {
            return (
              <>
                <li key={i}>
                  <h3>{person} </h3>
                </li>
                {task[person].map((chore, i) => {
                  return <li key={i}>{chore} </li>
                })}
              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Assign

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}
