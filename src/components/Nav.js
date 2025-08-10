function Nav(){
    return (
   <div className="navbar">
        <div className="section-one">
            <h1 class="section-one__title">Udemy</h1>
        </div>
        <div className="section-two">
            <i className="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
            <input placeholder="search for anything " class="section-two__search"></input>
        </div>
        <div className="nav__s3">
            <p>
                Courses
            </p>
           
            <div className="nav__s3__mylearning">
                <p>My Learning</p>
                <div className="nav__s3__mylearning__popup">
                    <p>
                        you not have bought a course yet
                    </p>

                </div>
                
            </div>
            <div className="nav__s3__icons">
                <i className="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
                <i className="fa-solid fa-bell" style={{color: "#000000"}}></i>
                <i className="fa-solid fa-user" style={{color: "#000000"}}></i>


            </div>
        </div>
        <div className="nav__s4">
            <i className="fa-solid fa-bars" style={{color: "#000000"}}></i>
        </div>
    </div>
    )
}
export default Nav