
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    // add hook to manage the form data and state
    // set the initial state to empty strings, with three value key-value pairs
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // destructure the formState object into its named properties
    const { name, email, message } = formState;            
    // State: assigned initial state values to the input fields in the DOM
    function handleChange(e) {
          // state
          setFormState({...formState, [e.target.name]: e.target.value})

            // add validation for input (place before setFormState)
            if (e.target.name === 'email') {
                const isValid = validateEmail(e.target.value);
                console.log(isValid);
                // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Did you enter a valid email address?');
                  }     
                  else {
                        if (!e.target.value.length) {
                        setErrorMessage(`${e.target.name} is required.`);
                        } else {
                        setErrorMessage('');
                        }
                    }
                // console.log('errorMessage', errorMessage);
            }  
            // with error validation
            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
              }            
          }          
        // console.log(formState);
        // function to handle the submission of the form
        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState);
          }
        
    // JSX
    return (
      
            // <section className="contact-form">
            //   <table style="width:100%">
            //     <tr>
            //           <div>
            //             <p></p> 
            //             <p><h5>Contact info</h5></p>
            //             <p></p>
            //             <p></p>
            //             <p></p>
            //             <p> <a href="https://www.linkedin.com/in/akatarinathisner/">www.linkedin.com/in/akatarinathisner</a> </p>
            //             <p> <a href="https://github.com/ktrnthsnr">github.com/ktrnthsnr</a> </p>
            //             <p> <a href="https://www.linkedin.com/in/akatarinathisner/">LinkedIn for a resume</a></p>     
            //           </div>
            //     </tr>
            //     <tr>
                      // <form id="contact-form" onSubmit={handleSubmit}>
                      //   <p><h5>Email me</h5></p>
                      //       <div>
                      //           <p>
                      //             <label className="label" htmlFor="name">Name:</label>
                      //             </p> 
                      //           <p></p>
                      //           <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                      //       </div>
                      //       <div>                                        
                      //           <p><label htmlFor="email">Email address:</label> </p>
                      //           <p></p>
                      //           <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                      //       </div>
                      //       <div>
                      //           <p><label htmlFor="message">Message:</label></p>
                      //           <p></p>
                      //           <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                      //       </div>
                      //           <p><button type="submit">Submit</button> </p>              
                      //           {errorMessage && (
                      //           <div>
                      //               <p className="error-text">{errorMessage}</p>
                      //           </div>
                      //            )}
                      // </form>
            //     </tr>
            //   </table>
            // </section>
          <section>
              <div>
                <p></p> 
                <p><h5>My contact info</h5></p>
                <p></p>
                <p></p>
                <p></p>
                <p> <a href="https://www.linkedin.com/in/akatarinathisner/">www.linkedin.com/in/akatarinathisner</a> </p>
                <p> <a href="https://github.com/ktrnthsnr">github.com/ktrnthsnr</a> </p>
                <p> <a href="https://www.linkedin.com/in/akatarinathisner/">LinkedIn for a resume</a></p>     
             </div>

              <form id="contact-form" onSubmit={handleSubmit}>
                  <p><h5>Send me a message</h5></p>
                  <table>                  
                    <tr>                        
                        <th><label className="label" htmlFor="name">Name</label></th>
                        <th><label htmlFor="email">Email address</label></th>
                        <th><label htmlFor="message">Message</label></th>
                        <th><label type="submit">Submit</label> </th> 
                    </tr>
                    <tr>     
                        <td><input className="form-input" type="text" name="name" defaultValue={name} onChange={handleChange}/></td>
                        <td><input className="form-input" type="text" name="email" defaultValue={email} onChange={handleChange}/></td>
                        
                        {/* <td><input                    type="text" name="name" defaultValue={name} onChange={handleChange}  /></td> */}
                        
                        <td><textarea className="form-input"          name="message" defaultValue={message} onChange={handleChange} rows="4" name="message" /></td>

                        <td>
                        <button type="submit">Submit</button> 
                            {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                            )}
                        </td>
                    </tr>
                  </table>
              </form>

          </section>
    );  
}
    
export default ContactForm;


// // ------------  previous  ------------ // // 

// import React from "react";

// const Contact = () => (
//   <section>
  //  <div>
  //     <p></p> 
  //     <p><h5>Contact</h5></p>
  //     <p></p>
  //     <p></p>
  //     <p></p>
  //     <p> <a href="https://www.linkedin.com/in/akatarinathisner/">www.linkedin.com/in/akatarinathisner</a> </p>
  //     <p> <a href="https://github.com/ktrnthsnr">github.com/ktrnthsnr</a> </p>
  //     <p> <a href="https://www.linkedin.com/in/akatarinathisner/">LinkedIn for a resume</a></p>     
  //   </div>
//   </section>
// );

// export default Contact;


