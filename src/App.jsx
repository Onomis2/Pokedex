import './App.css'

function App() {

  return (
    <>
      <possibleHeader/>

      <div className="data-container">

        <div className="top-container">
          <div className="smalldata">
            <h1>small data</h1>
          </div>
          <div className="dataselect">
            <h1>data select</h1>
          </div>
        </div>

        <div className="bigdata">
          <h1>large data</h1>
        </div>

      </div>

      <possibleFooter/>
    </>
  )
}

export default App
