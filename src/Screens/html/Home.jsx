import { Link } from "react-router-dom";
import  '../css/Home.css';
function Home() {
    return (
        <div id="body">
          
            <main>
                <div className="cards">
                <div class="card">
                    <Link id="lin" to="studyMaterials">
                        <img alt="Content" src={require("../../assets/study.jpg")} />
                    <h3>Study Materials</h3>  

                    </Link>
                </div>
                <div class="card">
                    <Link id="lin" to="Vacency_ExamDates">
                    <img  alt="Content" src={require("../../assets/Exam.jpg")} />

                 <h3>Vaccines and Examdates</h3> 
                 </Link>
                </div>
                <div class="card">
                    <Link id="lin" to ="Educator">
                    <img  alt="Content"  src={require("../../assets/Education.jpg")} />

                    <h3>Educator</h3>
                    </Link>
                </div>
                </div>
                <img id="imga" src={require("../../assets/girl.png")} alt="Girl Studying With Phone"/>
                
            </main>
            <p id="DescText">
                Welcome to HamroSikshya.online, your premier destination for affordable educational resources in Nepal! We're dedicated to making learning accessible to all, offering a wide range of low-cost notes tailored to school, college, and government education curricula. Whether you're a student striving for academic excellence or an educator seeking supplemental materials, our platform provides the leverage you need to excel. Explore our comprehensive collection and unlock the power of online learning with HamroSikshya.online.
                </p>
            
       
        </div>
    );
}
export default Home;