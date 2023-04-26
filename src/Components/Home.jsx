import React from 'react'

function Home() {
  return (
    <div className="section section-box1">
        <div className="container container-box1">
          <div className="row row-box1 animate__animated animate__zoomIn">
            <div className="col-sm-6 col-box1 animate__animated animate__zoomIn">
            <h1>Current 📟 Time is :</h1>
            </div>
            <div className="col-sm-6 col-box1 animate__animated animate__zoomIn">
            <h1 id="time"></h1>
            </div>
          </div>
          <div>
          </div>
        </div> 
    </div>
  )
}

export default Home;