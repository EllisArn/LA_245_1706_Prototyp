import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const subjects = document.querySelectorAll('.subjects')
    const topics = document.querySelectorAll('.topics')
    const toggle = document.querySelector('#toggle')

    let selectedSubject = document.querySelector('#labelToToggle').innerHTML

    function handleSubjectClick(event) {
      selectedSubject = event.target.innerHTML
      if (toggle.checked) {
        toggle.checked = false
      } else {
        toggle.checked = true
      }
      toggleOptions()
      document.querySelector('#labelToToggle').innerHTML =
        event.target.innerHTML
      document.querySelectorAll('.topics').forEach((topic) => {
        topic.innerHTML = `${topic.id} in ${event.target.innerHTML}`
      })
      document.querySelector(
        '#textfield'
      ).value = `text in topic-1 in ${event.target.innerHTML}`
    }

    function handleTopicClick(event) {
      document.querySelector(
        '#textfield'
      ).value = `text in ${event.target.id} in ${selectedSubject}`
    }

    subjects.forEach((subject) => {
      subject.addEventListener('click', handleSubjectClick)
    })

    topics.forEach((topic) => {
      topic.addEventListener('click', handleTopicClick)
    })

    toggle.addEventListener('change', toggleOptions)

    return () => {
      subjects.forEach((subject) => {
        subject.removeEventListener('click', handleSubjectClick)
      })
      topics.forEach((topic) => {
        topic.removeEventListener('click', handleTopicClick)
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
        <main>
          <textarea name="textfield" id="textfield">
            text in topic-1 in s1
          </textarea>
        </main>
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
            topic-1 in s1
          </div>
          <div className="topics" id="topic-2">
            topic-2 in s1
          </div>
          <div className="topics" id="topic-3">
            topic-3 in s1
          </div>
        </nav>
      </div>
    </>
  )
}

function toggleOptions() {
  const toggle = document.querySelector('#toggle')
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

export default App
