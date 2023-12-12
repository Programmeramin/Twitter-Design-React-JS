import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Auth.scss";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import Sign from "../../Components/Sign/Sign";

const Auth = () => {

  const [modal, setModal] = useState(false);

  const [sign, setSign] = useState(false);

  return (
    <>

    {modal && (
      <Modal hide={setModal}> 

      </Modal >
    )}

    {sign && (
        <Sign hide={setSign}>

        </Sign>
    )}
   
     <div className="twt-auth-area">
        <div className="twt-auth-container">
            <div className="twt-auth-left">
            <div class="css-175oi2r r-1p0dtai r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-u9bbvc r-zchlnj r-ipm5af"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18jsvk2 r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg></div>  
            </div>

            <div className="twt-auth-right">
                <h1>Happening now</h1>
                <h5>join today.</h5>
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

                  
                  <div className="create-account">
                    <Link onClick={() => setModal(true)}>Create Account</Link>
                  </div>

                  <div className="terms">
                    <p>By signing up, you agree to the <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>, including <Link>Cookie Use.</Link></p>
                  </div>

                  <h3>Already have an account</h3>
                  <div className="Sign">
                    <Link onClick={() => setSign(true)}>Sign in</Link>
                  </div>

            </div>
        </div>
     </div>

    </>
  )
}

export default Auth