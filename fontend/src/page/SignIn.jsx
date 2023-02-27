import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom"
export const SignIn = () => {
    return(
        <div>
            <Navbar/>
        <div className="gol">
            <div className="signin">
                <div className="name">
                    <h3 style={{color:"white",marginLeft:"20px",marginTop:"5px"}}>User Login</h3>
                </div>
                <div className="signers">
                    <div className="ug">Email</div>
                    <input type="text" className="userloginInput" placeholder="Demo@email.com"/>
                    <div className="ug">Password</div>
                    <input type="password" className="userloginInput"placeholder="Password"/>
                    <button className="userloginButton">LOGIN</button>
                    <div style={{display:"flex",displayFlex:"row",alignItems:"baseline"}}>
                        <div className="donthave">Dont have an account?</div>
                        <Link style={{ color: "#c40622" ,textDecoration:" none", marginLeft:"5px"}} to="/signup">Sign Up</Link>
                    </div>
                    <div style={{ color: "#c40622" , marginTop:"20px"}} >Forgot your password?</div>
                    <button className="zugeerl">LOGIN WITH FACEBOOK</button>
                    <div className="zurag"></div>
                    <button className="zugeerl2">LOGIN WITH GOOGLE PLUS</button>
                    <div className="zurag2"></div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
