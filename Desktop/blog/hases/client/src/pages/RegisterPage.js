import { Link } from "react-router-dom"
import "./RegisterPage.css"
export default function RegisterPage(){
    return(
        <div className="register-page">
            <form> 
                <h2>Signup</h2>
                <label>You are</label>
                <div className="label-role-div">
                    <label className="label-role">
                        <input type="radio" name="role" value="student" /><i class="fa fa-id-card"></i> A <span>Job Seeker</span> looking for a job <br />
                    </label>
                    <label className="label-role">
                        <input type="radio" name="role" value="teacher" /><i class="fa-solid fa-chart-simple"></i> A <span>Company</span> looking for a candidate
                    </label>
                </div>

                <label>Username:</label>
                <input type="text" placeholder="Enter your username" />

                <label>Email: </label>
                <input type="email" placeholder="Enter your email" />

                <label>Password: </label>
                <input type="password" placeholder="Enter your password" />

                <label>Confirm Password: </label>
                <input type="password" placeholder="Re Enter your password" />

                <button type="submit">Register</button>
                <Link to="/login" className="link-loginPage">Already have an account?</Link>
            </form>
        </div>
    )
}