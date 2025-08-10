import one from "../assests/image/c1.jpg";
import two from "../assests/image/c2.jpg";
import three from "../assests/image/c3.jpg";
import four from "../assests/image/c4.jpg";

function Pop(){
    return (
    <div className="popular">
        <h1>Most popular</h1>
        <p>pick the best</p>
        <div className="popular__container">
            <div className="course-card">
                <img src={two} alt="c1-image"></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={three} alt="c1-image"></img>
                <h3>Basic to advance programming with alan</h3>
                <p>Col Steele</p>
                <p>2.0 ⭐⭐</p>
                <p>499 <del>2599</del></p>
            </div>
            <div className="course-card">
                <img src={four} alt="c1-image"></img>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={one} alt="c1-image"></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>499 <del>2499</del></p>
            </div>
        </div>


    </div>
    )
}
export default Pop