import './App.css'

export function Topic() {
  return (
    <>
      <div className="container">
        <header>
          <div id="header-top">1</div>
          <div id="header-bottom">2</div>
        </header>
        <main>main</main>
        <nav>
          <select name="topics" id="dropdown">
            <option value="t1">t1</option>
            <option value="t2">t2</option>
            <option value="t3">t3</option>
          </select>
          <div className="assignment" id="assignment-1">
            t1
          </div>
          <div className="assignment" id="assignment-2">
            t2
          </div>
          <div className="assignment" id="assignment-3">
            t3
          </div>
        </nav>
      </div>
    </>
  )
}

export default Topic
