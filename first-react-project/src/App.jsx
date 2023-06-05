import Programmer from "./components/Programmer"
import Navbar from "./components/Navbar"
import Footerbar from "./components/Footerbar"
import Company from "./components/Company"
import './assets/App.css'
function App() {
  const lan =  ["JS","Java","Python"]
  return (
    <>
      <Navbar/>
      <div>
        <div className="card-container"> 
          <Company name="Microsoft" years="1975" employees="221,000" serviceName="ChatGPT" servicePrice="8.00" path="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png?20210729021049"/>
          <Company name="Apple" years="1976" employees="164,000" serviceName="Cloud" servicePrice="1.00" path="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png?20200509031052"/>
          <Company name="Google" years="1998" employees="135,000" serviceName="Bard" servicePrice="5.00" path="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1176px-Google_%22G%22_Logo.svg.png?20230305195327"/>
        </div>
        <div className="card-container">
          <Programmer name="Raeed" company="Microsoft" years="0" languages={lan}/>
          <Programmer name="Saud" company="Apple" years="4" languages={["JS","Java"]}/>
          <Programmer name="Faisal" company="Google" years="6" languages={["JS","Java"]}/>
        </div>
      

        {/* <img src={Flower} alt="Flower" className="round"/> */}
      </div>
      <Footerbar/>
    </>
  )
}

export default App
