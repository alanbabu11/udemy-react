import one from "../assests/image/c1.jpg";
import two from "../assests/image/c2.jpg";
import three from "../assests/image/c3.jpg";
import four from "../assests/image/c4.jpg";

function Rec(){
    return (
    <div className="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>pick the best</p>
        <div className="recommended__container">
            <div className="course-card">
                <img src={two} alt="Python Data Visualisation Masterclass course card showing instructor Col Steele, rating 4.9 stars, price 499 with original price 1999 struck through. The card is set in a modern online course catalog with a positive and inviting tone."></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={three} alt="Basic to advance programming with alan course card featuring instructor Col Steele, rating 2.0 stars, price 499 with original price 2599 struck through. The card is part of a recommended courses section with a friendly and encouraging atmosphere."></img>
                <h3>Basic to advance programming with alan</h3>
                <p>Col Steele</p>
                <p>2.0 ⭐⭐</p>
                <p>499 <del>2599</del></p>
            </div>
            <div className="course-card">
                <img src={four} alt="Web Development Bootcamp 2023 course card displaying instructor Col Steele, rating 4.9 stars, price 499 with original price 1999 struck through. The card appears in a curated list of recommended courses with a welcoming and motivational mood."></img>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={one} alt="Master UI UX Designing with Figma course card highlighting instructor Col Steele, rating 5.0 stars, price 499 with original price 2499 struck through. The card is shown in a recommended section of an online learning platform with an inspiring and upbeat tone."></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>499 <del>2499</del></p>
            </div>
        </div>
    </div>
    );
}
export default Rec;
