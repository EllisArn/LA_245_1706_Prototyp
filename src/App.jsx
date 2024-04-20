import React, { useEffect } from 'react'
import './App.css'
import DownArrow from './assets/down-arrow-svgrepo-com.svg'
import ReverseArrow from './assets/reverse-left-svgrepo-com.svg'
import ForwardArrow from './assets/reverse-right-svgrepo-com.svg'
import Clipboard from './assets/clipboard-svgrepo-com.svg'
import Underline from './assets/underline-svgrepo-com.svg'
import Highlight from './assets/highlighter-svgrepo-com.svg'
import Textcolour from './assets/text-color-svgrepo-com.svg'
import FormatBrush from './assets/paintbrush-svgrepo-com.svg'
import RemoveFormat from './assets/text-clear-format-svgrepo-com.svg'
import List from './assets/list-ul-alt-svgrepo-com.svg'
import NumberedList from './assets/list-numbered-svgrepo-com.svg'
import DecreaseIndent from './assets/format-indent-decrease-svgrepo-com.svg'
import IncreaseIndent from './assets/format-indent-increase-svgrepo-com.svg'
import Checkbox from './assets/checkbox-check-svgrepo-com.svg'
import Microphone from './assets/microphone-svgrepo-com.svg'

function App() {
  useEffect(() => {
    const headerButtons = document.querySelectorAll('.headerButtons')
    const subjects = document.querySelectorAll('.subjects')
    const topics = document.querySelectorAll('.topics')
    const assignments = document.querySelectorAll('.assignments')
    const toggle = document.querySelector('#toggle')

    let selectedHeaderButton = document.querySelector('.selectedHeaderButton')
    createEditButtons(selectedHeaderButton.id)
    setIconsForEditButtons(selectedHeaderButton.id)

    let selectedSubject = document.querySelector('.selectedSubject')
    let selectedTopic = document.querySelector('.selectedTopic')
    let selectedAssignment = document.querySelector('.selectedAssignment')

    document.querySelector(
      '#textfield'
    ).value = `text in assignment-1 in topic-1 in ${selectedSubject.id}`

    function handleHeaderButtonClick(event) {
      selectedHeaderButton.classList.remove('selectedHeaderButton')
      event.target.classList.add('selectedHeaderButton')
      selectedHeaderButton = event.target
      createEditButtons(event.target.id)
      setIconsForEditButtons(event.target.id)
    }

    function handleSubjectClick(event) {
      if (toggle.checked) {
        toggle.checked = false
      } else {
        toggle.checked = true
      }
      selectedSubject.classList.remove('selectedSubject')
      event.target.classList.add('selectedSubject')
      selectedSubject = event.target
      selectedTopic.classList.remove('selectedTopic')
      selectedTopic = document.querySelector('.topics')
      selectedTopic.classList.add('selectedTopic')
      selectedAssignment.classList.remove('selectedAssignment')
      selectedAssignment = document.querySelector('.assignments')
      selectedAssignment.classList.add('selectedAssignment')
      toggleOptions()
      document.querySelector('#labelToToggle-text').innerHTML =
        event.target.innerHTML
      document.querySelectorAll('.topics').forEach((topic) => {
        topic.innerHTML = `${topic.id} in ${event.target.innerHTML}`
      })
      document.querySelectorAll('.assignments').forEach((assignment) => {
        assignment.innerHTML = `${assignment.id} in ${selectedTopic.id} in ${event.target.innerHTML}`
      })
      document.querySelector(
        '#textfield'
      ).value = `text in ${selectedAssignment.id} in topic-1 in ${event.target.innerHTML}`
    }

    topics.forEach((topic) => {
      topic.oncontextmenu = function (e) {
        e.preventDefault()
        return false
      }
    })

    assignments.forEach((assignment) => {
      assignment.oncontextmenu = function (e) {
        e.preventDefault()
        return false
      }
    })

    // von hier bis zum nächsten Kommentar habe ich folgendes als Vorlage benutzt und abgeändert: https://stackoverflow.com/questions/62563870/custom-right-click-menu-on-all-a-elements
    const ctxmenu = document.querySelector('#ctxmenu')
    const listitem = document.querySelector('#listitem')

    document.addEventListener('contextmenu', (e) => {
      ctxmenu.classList.remove('show')
    })
    document.addEventListener('click', (e) => {
      ctxmenu.classList.remove('show')
    })

    topics.forEach((topic) => {
      topic.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        e.stopPropagation()

        ctxmenu.style.top = e.y + 'px'
        ctxmenu.style.left = e.x + 'px'

        listitem.innerHTML = `${topic.id} in ${selectedSubject.id} zuweisen`

        ctxmenu.classList.add('show')
      })
    })

    assignments.forEach((assignment) => {
      assignment.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        e.stopPropagation()

        ctxmenu.style.top = e.y + 'px'
        ctxmenu.style.left = e.x + 'px'

        listitem.innerHTML = `${assignment.id} in ${selectedTopic.id} zuweisen`

        ctxmenu.classList.add('show')
      })
    })
    // ab hier wider 100% selbst geschrieben

    function handleTopicClick(event) {
      selectedTopic.classList.remove('selectedTopic')
      event.target.classList.add('selectedTopic')
      selectedTopic = event.target
      selectedAssignment.classList.remove('selectedAssignment')
      selectedAssignment = document.querySelector('.assignments')
      selectedAssignment.classList.add('selectedAssignment')
      assignments.forEach((assignment) => {
        assignment.innerHTML = `${assignment.id} in ${event.target.id} in ${selectedSubject.id}`
      })
      document.querySelector(
        '#textfield'
      ).value = `text in ${selectedAssignment.id} ${event.target.id} in ${selectedSubject.id}`
    }

    function handleAssignmentClick(event) {
      selectedAssignment.classList.remove('selectedAssignment')
      event.target.classList.add('selectedAssignment')
      selectedAssignment = event.target
      document.querySelector(
        '#textfield'
      ).value = `text in ${event.target.id} in ${selectedTopic.id} in ${selectedSubject.id}`
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
              <span id="labelToToggle-text">subject-1</span>
              <img id="dropdownArrow" src={DownArrow} alt="down-arrow" />
            </label>

            <input type="checkbox" id="toggle"></input>
            <div className="subjects selectedSubject" id="subject-1">
              subject-1
            </div>
            <div className="subjects" id="subject-2">
              subject-2
            </div>
            <div className="subjects" id="subject-3">
              subject-3
            </div>
            <div className="topics selectedTopic" id="topic-1">
              topic-1 in subject-1
            </div>
            <div className="topics" id="topic-2">
              topic-2 in subject-1
            </div>
            <div className="topics" id="topic-3">
              topic-3 in subject-1
            </div>
            <div className="topics" id="topic-4">
              topic-4 in subject-1
            </div>
          </div>
          <div id="assignments-container">
            <div className="assignments selectedAssignment" id="assignment-1">
              assignment-1 in topic-1 in subject-1
            </div>
            <div className="assignments" id="assignment-2">
              assignment-2 in topic-1 in subject-1
            </div>
            <div className="assignments" id="assignment-3">
              assignment-3 in topic-1 in subject-1
            </div>
            <div className="assignments" id="assignment-4">
              assignment-4 in topic-1 in subject-1
            </div>
            <div className="assignments" id="assignment-5">
              assignment-5 in topic-1 in subject-1
            </div>
          </div>
        </nav>
      </div>
      <div id="ctxmenu">
        <ul id="list">
          <li id="listitem"></li>
        </ul>
      </div>
    </>
  )
}

/* Das HTML 
<div id="ctxmenu">
  <ul id="list">
    <li id="listitem"></li>
  </ul>
</div>
habe ich ebenfalls von https://stackoverflow.com/questions/62563870/custom-right-click-menu-on-all-a-elements kopiert und abgeändert
*/

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
    for (let i = 1; i <= 21; i++) {
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

function setIconsForEditButtons(buttonId) {
  const editButtons = document.querySelectorAll('.editButtons')
  if (buttonId === 'start-headerButton') {
    editButtons[0].innerHTML = `<img class="icons" id="reverseArrow" src=${ReverseArrow} alt="reverse arrow" />`
    editButtons[1].innerHTML = `<img class="icons" id="forwardArrow" src= ${ForwardArrow} alt="forward arrow" />`
    editButtons[2].innerHTML = `<img class="icons" id="clipboard" src=${Clipboard} alt="clipboard" />`
    editButtons[3].innerHTML = `<div>Calibri</div>`
    editButtons[3].style.aspectRatio = '0'
    editButtons[3].style.padding = '0 5px 0 5px'
    editButtons[4].innerHTML = `<div>11</div>`
    editButtons[5].innerHTML = `<div style="font-weight: bold">F</div>`
    editButtons[6].innerHTML = `<div style="font-style: italic">K</div>`
    editButtons[7].innerHTML = `<img class="icons" id="underline" src=${Underline} alt="underline" />`
    editButtons[8].innerHTML = `<img class="icons" id="highlight" src=${Highlight} alt="highlight" />`
    editButtons[9].innerHTML = `<img class="icons" id="textcolour" src=${Textcolour} alt="text colour" />`
    editButtons[10].innerHTML = `<img class="icons" id="formatBrush" src=${FormatBrush} alt="format brush" />`
    editButtons[11].innerHTML = `<img class="icons" id="removeFormat" src=${RemoveFormat} alt="remove format" />`
    editButtons[12].innerHTML = `<img class="icons" id="textStyleDropdown" src=${DownArrow} alt="arrow down" />`
    editButtons[13].innerHTML = `<img class="icons" id="list" src=${List} alt="list" />`
    editButtons[14].innerHTML = `<img class="icons" id="numberedList" src=${NumberedList} alt="numbered list" />`
    editButtons[15].innerHTML = `<img class="icons" id="decreaseIndent" src=${DecreaseIndent} alt="decrease indent" />`
    editButtons[16].innerHTML = `<img class="icons" id="increaseIndent" src=${IncreaseIndent} alt="increase indent" />`
    editButtons[17].innerHTML = `<img class="icons" id="textStyleDropdown" src=${DownArrow} alt="arrow down" />`
    editButtons[18].innerHTML = `<img class="icons" id="checkbox" src=${Checkbox} alt="checkbox" />`
    editButtons[19].innerHTML = `<img class="icons" id="microphone" src=${Microphone} alt="microphone" />`
    editButtons[20].innerHTML = `<img class="icons" id="microphoneDropdown" src=${DownArrow} alt="arrow down" />`
  }
}

export default App
