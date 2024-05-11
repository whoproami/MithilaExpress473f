import '../css/App.css';
import '../css/Educt.css'
function Educat() {
    return (<div id="body" >
        <h1>Studt Material Curated by <span >Educator</span></h1>
        <div id="cardbody">
        <div id="cardsEdu">
            <img src={require("../../assets/Education.jpg")} alt="Educator Image" id='educimg' />
            <p>Priya Ranjan</p>
            <span>Hello my name is Priya Ranjan i am a Final Year Student doing  Btech in Computer Science.I will teach programming and devlopment mostly i like teaching as it helps me to learn more deeply and i always wanted to make learning fun.My First Sessions Will be on C programming. </span>
        </div>
        <div id="cardsEdu">
            <img src={require("../../assets/Education.jpg")} alt="Educator Image"  id='educimg'/>
            <p>Jagat Reedy</p>
            <span> Hello my name is Jagat Reedy Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae laborum eos voluptatum fugit, saepe temporibus consectetur commodi aliquid vel nam natus esse accusantium cupiditate, tempora debitis dolores eum! Laboriosam.</span>
        </div>
        <div id="cardsEdu">
            <img  src={require("../../assets/Education.jpg")} alt="Educator Image" id='educimg' />
            <p>Raju KUmar</p>
            <span> Hello my name is Raju Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique porro assumenda fuga cupiditate tempore consequatur fugiat, quam quisquam voluptate quo nobis commodi doloremque sint amet nesciunt tenetur perferendis. Sit, id!</span>

        </div>
        <div id="cardsEdu">
            <img  src={require("../../assets/Education.jpg")} alt="Educator Image" id='educimg' />
            <p>Raju KUmar</p>
            <span>Hello my name is Raju Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, illum quo, repellendus et fuga odit eligendi eum recusandae, odio dolorem deserunt unde. Sequi, ipsa ipsam quaerat cupiditate suscipit omnis nam.</span>
        </div>
        </div>
    </div>);
}
export default Educat;