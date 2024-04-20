import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const headerButtons = document.querySelectorAll('.headerButtons')
    const subjects = document.querySelectorAll('.subjects')
    const topics = document.querySelectorAll('.topics')
    const toggle = document.querySelector('#toggle')

    let selectedHeaderButton = document.querySelector('.selected')

    let selectedSubject = document.querySelector('#labelToToggle').innerHTML
    document.querySelector(
      '#textfield'
    ).value = `text in topic-1 in ${selectedSubject}`

    function handleHeaderButtonClick(event) {
      selectedHeaderButton.classList.remove('selected')
      event.target.classList.add('selected')
      selectedHeaderButton = event.target

      if (event.target.id === 'start-headerButton') {
        document.querySelector('#bottom-headerButtons').innerHTML = ''
        for (let i = 1; i <= 22; i++) {
          const button = document.createElement('button')
          button.classList.add('editButtons')
          button.innerHTML = i
          document.querySelector('#bottom-headerButtons').appendChild(button)
        }
      } else if (event.target.id === 'insert-headerButton') {
        document.querySelector('#bottom-headerButtons').innerHTML = ''
        for (let i = 1; i <= 16; i++) {
          const button = document.createElement('button')
          button.classList.add('editButtons')
          button.innerHTML = i
          document.querySelector('#bottom-headerButtons').appendChild(button)
        }
      } else if (event.target.id === 'draw-headerButton') {
        document.querySelector('#bottom-headerButtons').innerHTML = ''
        for (let i = 1; i <= 16; i++) {
          const button = document.createElement('button')
          button.classList.add('editButtons')
          button.innerHTML = i
          document.querySelector('#bottom-headerButtons').appendChild(button)
        }
      } else if (event.target.id === 'view-headerButton') {
        document.querySelector('#bottom-headerButtons').innerHTML = ''
        for (let i = 1; i <= 15; i++) {
          const button = document.createElement('button')
          button.classList.add('editButtons')
          button.innerHTML = i
          document.querySelector('#bottom-headerButtons').appendChild(button)
        }
      } else if (event.target.id === 'help-headerButton') {
        document.querySelector('#bottom-headerButtons').innerHTML = ''
        for (let i = 1; i <= 4; i++) {
          const button = document.createElement('button')
          button.classList.add('editButtons')
          button.innerHTML = i
          document.querySelector('#bottom-headerButtons').appendChild(button)
        }
      }
    }

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

    headerButtons.forEach((button) => {
      button.addEventListener('click', handleHeaderButtonClick)
    })

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
          <div id="header-top">
            <div id="top-headerButtons">
              <div id="menuButton-container">
                <button
                  className="headerButtons menuButtons selected"
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
