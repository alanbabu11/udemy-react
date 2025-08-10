import sale from "../assests/image/sale-image.jpg";

function SaleImg(){
    return (
     <div className="sale-image">
        <img src={sale} alt="sale-image"></img>
        <div className="offer">
            <h2>Udemy Flash Sale!</h2>
            <p>get top course at 499 only.one time payment for lifetime</p>
        </div>
    </div>
    );
}
export default SaleImg;