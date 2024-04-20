import React, { useEffect } from 'react'
import './App.css'
import DownArrow from './assets/down-arrow-svgrepo-com.svg'

function App() {
  useEffect(() => {
    const headerButtons = document.querySelectorAll('.headerButtons')
    const subjects = document.querySelectorAll('.subjects')
    const topics = document.querySelectorAll('.topics')
    const assignments = document.querySelectorAll('.assignments')
    const toggle = document.querySelector('#toggle')

    let selectedHeaderButton = document.querySelector('.selectedHeaderButton')
    createEditButtons(selectedHeaderButton.id)

    let selectedSubject = document.querySelector(
      '#labelToToggle-text'
    ).innerHTML

    document.querySelector(
      '#textfield'
    ).value = `text in assignment-1 in topic-1 in ${selectedSubject}`

    let selectedTopic = document.querySelector('.selectedTopic')

    let selectedAssignment = document.querySelector('.selectedAssignment')

    function handleHeaderButtonClick(event) {
      selectedHeaderButton.classList.remove('selectedHeaderButton')
      event.target.classList.add('selectedHeaderButton')
      selectedHeaderButton = event.target
      createEditButtons(event.target.id)
    }

    function handleSubjectClick(event) {
      selectedSubject = event.target.innerHTML
      if (toggle.checked) {
        toggle.checked = false
      } else {
        toggle.checked = true
      }
      toggleOptions()
      document.querySelector('#labelToToggle-text').innerHTML =
        event.target.innerHTML
      document.querySelectorAll('.topics').forEach((topic) => {
        topic.innerHTML = `${topic.id} in ${event.target.innerHTML}`
      })
      document.querySelector(
        '#textfield'
      ).value = `text in ${selectedAssignment.id} in topic-1 in ${event.target.innerHTML}`
    }

    function handleTopicClick(event) {
      selectedTopic.classList.remove('selectedTopic')
      event.target.classList.add('selectedTopic')
      selectedTopic = event.target
      assignments.forEach((assignment) => {
        assignment.innerHTML = `${assignment.id} in ${event.target.id} in ${selectedSubject}`
      })
      document.querySelector(
        '#textfield'
      ).value = `text in ${selectedAssignment.id} ${event.target.id} in ${selectedSubject}`
    }

    function handleAssignmentClick(event) {
      selectedAssignment.classList.remove('selectedAssignment')
      event.target.classList.add('selectedAssignment')
      selectedAssignment = event.target
      document.querySelector(
        '#textfield'
      ).value = `text in ${event.target.id} in ${selectedTopic.id} in ${selectedSubject}`
    }

    headerButtons.forEach((button) => {
      button.addEventListener('click', handleHeaderButtonClick)
    })

    subjects.forEach((subject) => {
      subject.addEventListener('click', handleSubjectClick)
    })

    topics.forEach((topic) => {
      topic.addEventListener('click', handleTopicClick)
    })

    assignments.forEach((assignment) => {
      assignment.addEventListener('click', handleAssignmentClick)
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
          <div id="header-top">
            <div id="top-headerButtons">
              <div id="menuButton-container">
                <button
                  className="headerButtons menuButtons selectedHeaderButton"
                  id="start-headerButton"
                >
                  Start
                </button>
                <button
                  className="headerButtons menuButtons"
                  id="insert-headerButton"
                >
                  Einfügen
                </button>
                <button
                  className="headerButtons menuButtons"
                  id="draw-headerButton"
                >
                  Zeichnen
                </button>
                <button
                  className="headerButtons menuButtons"
                  id="view-headerButton"
                >
                  Ansicht
                </button>
                <button
                  className="headerButtons menuButtons"
                  id="help-headerButton"
                >
                  Hilfe
                </button>
              </div>
              <div id="otherButton-container">
                <button
                  className="headerButtons otherButtons"
                  id="profile-headerButton"
                >
                  Profil
                </button>
                <button
                  className="headerButtons otherButtons"
                  id="share-headerButton"
                >
                  Teilen
                </button>
                <button
                  className="headerButtons otherButtons"
                  id="print-headerButton"
                >
                  Drucken
                </button>
                <button
                  className="headerButtons otherButtons"
                  id="settings-headerButton"
                >
                  Einstellungen
                </button>
              </div>
            </div>
          </div>
          <div id="header-bottom">
            <div id="bottom-headerButtons"></div>
          </div>
        </header>
        <main>
          <textarea name="textfield" id="textfield"></textarea>
        </main>
        <nav>
          <div id="subjectAndTopic-container">
            <label id="labelToToggle" htmlFor="toggle">
              <span id="labelToToggle-text">s1</span>
              <img id="dropdownArrow" src={DownArrow} alt="down-arrow" />
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
            <div className="topics selectedTopic" id="topic-1">
              topic-1 in s1
            </div>
            <div className="topics" id="topic-2">
              topic-2 in s1
            </div>
            <div className="topics" id="topic-3">
              topic-3 in s1
            </div>
            <div className="topics" id="topic-4">
              topic-4 in s1
            </div>
          </div>
          <div id="assignments-container">
            <div className="assignments selectedAssignment" id="assignment-1">
              assignment-1 in topic-1 in s1
            </div>
            <div className="assignments" id="assignment-2">
              assignment-2 in topic-1 in s1
            </div>
            <div className="assignments" id="assignment-3">
              assignment-3 in topic-1 in s1
            </div>
            <div className="assignments" id="assignment-4">
              assignment-4 in topic-1 in s1
            </div>
            <div className="assignments" id="assignment-5">
              assignment-5 in topic-1 in s1
            </div>
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

function createEditButtons(buttonId) {
  if (buttonId === 'start-headerButton') {
    document.querySelector('#bottom-headerButtons').innerHTML = ''
    for (let i = 1; i <= 22; i++) {
      const button = document.createElement('button')
      button.classList.add('editButtons')
      button.innerHTML = i
      document.querySelector('#bottom-headerButtons').appendChild(button)
    }
  } else if (buttonId === 'insert-headerButton') {
    document.querySelector('#bottom-headerButtons').innerHTML = ''
    for (let i = 1; i <= 16; i++) {
      const button = document.createElement('button')
      button.classList.add('editButtons')
      button.innerHTML = i
      document.querySelector('#bottom-headerButtons').appendChild(button)
    }
  } else if (buttonId === 'draw-headerButton') {
    document.querySelector('#bottom-headerButtons').innerHTML = ''
    for (let i = 1; i <= 16; i++) {
      const button = document.createElement('button')
      button.classList.add('editButtons')
      button.innerHTML = i
      document.querySelector('#bottom-headerButtons').appendChild(button)
    }
  } else if (buttonId === 'view-headerButton') {
    document.querySelector('#bottom-headerButtons').innerHTML = ''
    for (let i = 1; i <= 15; i++) {
      const button = document.createElement('button')
      button.classList.add('editButtons')
      button.innerHTML = i
      document.querySelector('#bottom-headerButtons').appendChild(button)
    }
  } else if (buttonId === 'help-headerButton') {
    document.querySelector('#bottom-headerButtons').innerHTML = ''
    for (let i = 1; i <= 4; i++) {
      const button = document.createElement('button')
      button.classList.add('editButtons')
      button.innerHTML = i
      document.querySelector('#bottom-headerButtons').appendChild(button)
    }
  }
}

export default App
