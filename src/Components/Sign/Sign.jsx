import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaApple } from "react-icons/fa";
import "./Sign.scss";

const Sign = ({hide}) => {
  return (
    <>
    <h1>Sign</h1>

    <div className="sign-area">
        <div className="sign-container">
            <div className="sign-header">

                <Link onClick={() => hide(false) }><RxCross2 /></Link>
                <img src="https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp" alt="" />

            </div>

     <h3>Sign in to X</h3>

         <div className="sign-body">
         <div className="google-login">
                    <Link>
                    <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/346051613_254309320403131_1156063062724532570_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFora1wByerFkP5HZ4-gpQcgyfq9DL_PLCDJ-r0Mv88sOFTa7E_kaxqdxjP3ZLJpSMEbAdFSX7IhH_xfS2Vuy6k&_nc_ohc=CL9CPN-hmH8AX8fnwns&_nc_ht=scontent.fdac138-1.fna&oh=00_AfB1LelC-LEhGCJVZCnVtzkVcBtKqYlpsIzORQ8f9WmG3g&oe=657BEB31" alt="" />
                    </Link>
                    <div className="sign">
                      <p>Sign in as Md Amin Islam</p>
                      <p>2615aminislam@gamil.com</p>
                     
                    </div>
                    <Link>
                      <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" />
                      </Link>
                </div>
                <div className="apple-sign">
                  <Link><FaApple />
                 Sign up with Apple
                  </Link>
                
                </div>

                <div className="border">
                  <div className="bd-ree">
                    <div className="border-1">
                       <div className="border-left">

                       </div>
                    </div>
                    <div className="border-2">
                        <div className="border-middle">
                          <span>or</span>
                        </div>
                    </div>
                    <div className="border-3">
                        <div className="border-right"></div>
                    </div>
                  </div>
                  </div> 
                  
                  <div className="moe">
                    <input type="text" placeholder="Phone, email, or username"/>
                  </div>

                  <div className="sign-in">
           <Link>Next</Link>
           </div>

           <div className="Forgot">
           <Link>Forgot Password</Link>
           </div>

           <div className="dont-have-an">
            <p>Dont have an account? <Link>Sign up</Link></p>
           </div>

         </div>

        </div>
    </div>
      

    </>
  )
}

export default Sign