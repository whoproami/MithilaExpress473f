import { Link } from "react-router-dom";
import "./App.css"
function Home() {
    return (
        <div id="body">
          
            <main>
                <div className="cards">
                <div>
                    <Link to="/">
                    <h3>Study Materials</h3>  

                    </Link>
                </div>
                <div>
                 <h3>Vaccines and Examdates</h3> 
                </div>
                <div>
                  <h3>Educator</h3>
                </div>
                </div>
                <img src={require("../assets/girl.png")} alt="Girl Studying With Phone"/>
                <p>
                Welcome to HamroSikshya.online, your premier destination for affordable educational resources in Nepal! We're dedicated to making learning accessible to all, offering a wide range of low-cost notes tailored to school, college, and government education curricula. Whether you're a student striving for academic excellence or an educator seeking supplemental materials, our platform provides the leverage you need to excel. Explore our comprehensive collection and unlock the power of online learning with HamroSikshya.online.
                </p>
            </main>
          
            
       
        </div>
    );
}
export default Home;