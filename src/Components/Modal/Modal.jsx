import { Link } from "react-router-dom"
import { RxCross1 } from "react-icons/rx";
import "./Modal.scss";
import { day, month } from "../../Helpers/Helper";
import { Scrollbars } from 'react-custom-scrollbars';



const years = Array.from({
    length : new Date().getFullYear() -1900 }, (_, i) =>1901 + i).reverse()  ;

const Modal = ({hide}) => {
    
        return (
        <div className="Modal-area">
            <div className="modal-container">
         
                <div className="modal-header">
                    <Link onClick={() => hide(false)}><RxCross1 /></Link>
                    <h4>Step 1 of 5</h4>
                </div>
                
                <Scrollbars style={{ width: 500, height: 300 }}>
               <h2>Create your account</h2>
                <div className="modal-body">
                   <form className="create-account">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Phone"/>

                     <Link>Use phone instead</Link>
                     <div className="date-of-birth">
                        <h5>Date of birth</h5>
                        <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>

                        <div className="date-of-birth-input">
                            <select name="" >
                                <option value="">Day</option>
                               {day.map((item, index) =>{
                                return (
                                    <option value="" key={index}>{item}</option>
                                )
                               })}
                            </select>

                            <select name="" >
                                <option value="">Month</option>
                                {month.map((item, index) =>{
                                    return (
                                        <option value="" key={index}>{item}</option>
                                    )
                                })}
                            </select>

                            <select name="" >
                                <option value="">Year</option>
                                {years.map((item, index) =>{
                                    return (
                                        <option value={item} key={index}>{item}</option>
                                    )
                                })}
                               
                            </select>

                        </div>



                     </div>

                   </form>
            </div>

          
          </Scrollbars>
          <div className="sign-in">
           <Link>Next</Link>
           </div>


               



          
        </div>

    </div>
 
        );
      
}

export default Modal;








 



