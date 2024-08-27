import './App.css'
function App() {
  return (
    <>
    <div class="card">
        <div class="search">
            <input type="text" name="" id="" placeholder="Enter City Name" spellcheck="false"/>
            <button>
              <img src="./images/search.png" alt="" />
            </button>
        </div>
        <div class="error">
            <p>Invalid Input</p>
        </div>
        <div class="weather">
            <img src="./images/rain.png" class="weather-icon"/>
            <h1 class="temp">22°c</h1>
            <h2 class="city">Surat</h2>
            <div class="details">
                <div class="col">
                    <img src="./images/humidity.png"/>
                    <div>
                        <p class="humidity">50%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="./images/wind.png"/>
                    <div>
                        <p class="Wind">15km/h</p>
                        <p>wind speed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
