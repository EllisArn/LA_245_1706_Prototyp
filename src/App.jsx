import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const subjects = document.querySelectorAll('.subjects')
    const topics = document.querySelectorAll('.topics')
    const toggle = document.querySelector('#toggle')

    subjects.forEach((subject) => {
      subject.addEventListener('click', (event) => {
        if (toggle.checked) {
          toggle.checked = false
          toggleOptions()
        } else {
          toggle.checked = true
          toggleOptions()
        }
        document.querySelector('#labelToToggle').innerHTML = subject.innerHTML
      })
    })

    toggle.addEventListener('change', toggleOptions)

    return () => {
      subjects.forEach((subject) => {
        subject.removeEventListener('click', handleClick)
      })

      topics.forEach((topic) => {
        topic.removeEventListener('click', handleClick)
      })
    }
  }, [])

  return (
    <>
      <div className="container">
        <header>
          <div id="header-top">1</div>
          <div id="header-bottom">2</div>
        </header>
        <main>main</main>
        <nav>
          <label id="labelToToggle" htmlFor="toggle">
            s1
          </label>
          <input type="checkbox" id="toggle"></input>
          <div className="subjects" value="s1">
            s1
          </div>
          <div className="subjects" value="s2">
            s2
          </div>
          <div className="subjects" value="s3">
            s3
          </div>
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

function toggleOptions() {
  console.log('toggleOptions', toggle.checked)
  if (toggle.checked) {
    document.querySelectorAll('.subjects').forEach((subject) => {
      subject.style.display = 'block'
    })
    document.querySelectorAll('.topics').forEach((topic) => {
      topic.style.display = 'none'
    })
  } else {
    document.querySelectorAll('.subjects').forEach((subject) => {
      subject.style.display = 'none'
    })
    document.querySelectorAll('.topics').forEach((topic) => {
      topic.style.display = 'block'
    })
  }
}

function handleClick(event) {
  console.log(event.target)
}

export default App
