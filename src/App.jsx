import { useState } from 'react'
import './App.css'
import { Topic } from './Topic.jsx'

function App() {
  return (
    <>
      <div className="container">
        <header>
          <div id="header-top">1</div>
          <div id="header-bottom">2</div>
        </header>
        <main>main</main>
        <nav>
          <select name="subjects" id="dropdown">
            <option value="s1">s1</option>
            <option value="s2">s2</option>
            <option value="s3">s3</option>
          </select>
          <div className="topics" id="topic-1">
            t1
          </div>
          <div className="topics" id="topic-2">
            t2
          </div>
          <div className="topics" id="topic-3">
            t3
          </div>
        </nav>
      </div>
    </>
  )
}

document.querySelectorAll('.topics').forEach((topic) => {
  topic.addEventListener('click', (event) => {
    document.querySelector(
      'nav'
    ).innerHTML = `<select name="topics" id="dropdown">
    <option value="t1">t1</option>
    <option value="t2">t2</option>
    <option value="t3">t3</option>
  </select>
  <div className="assignment" id="assignment-1">
    a1
  </div>
  <div className="assignment" id="assignment-2">
    a2
  </div>
  <div className="assignment" id="assignment-3">
    a3
  </div>`
  })
})

export default App
