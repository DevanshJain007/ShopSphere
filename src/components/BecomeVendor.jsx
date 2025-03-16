import React from 'react'
import { useState } from 'react';
const BecomeVendor = () => {
    
    const [page,setPage]=useState(1);
  return (
    <>
    <div className='bg-black text-white border-2'>
        {
            (page===1)?(
                    <Page1/>
            ):( page===2?(
                       <Page2/>
            ):(
                page===3?(
                <Page3/>
                    
                ):(page===4?(
                    <Page4/>):(<></>)
                )
            ))
        }
    
        <div>
            {
                page!==1&&(
                    <div>
                <button type="button" onClick={()=>{setPage(page-1)}}>Back</button>
            </div>
                )
               
            }
            {
             page !==4 &&(
                         <div>
                <button type="button" onClick={()=>{setPage(page+1)}}>Continue</button>
            </div>
                )
            }
        </div>
    </div>
    </>
  )
}

const Page1=()=>{
    return(
        <>
        <div>
            <div>
                <h2>
                    Basic Information
                </h2>
                <p>Tell us about yourself and your contact Information</p>
            </div>
            <div>
                <form action="">
                    <div>
                        <div>
                        <label htmlFor="name">First Name</label>
                            <input type="text" name='name' placeholder='Devansh' />    
                        </div>
                         <div>
                          <label htmlFor="lastname"></label>
                          <input type="text" placeholder='Jain' name='name' />
                         </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" />
                    </div>
                    <div>
                    <label htmlFor="phoneno">Phone Number</label>
                    <input type="PhoneNo." name='phoneno'/>
                    </div>
                    <div>
                    <label htmlFor="password">Create Password</label>
                    <input type="password" placeholder='CratePassword' />
                     <label htmlFor="email">Confirm Password</label>
                    <input type="password" placeholder='Confirmpassword'/>
                    </div>
                    <div>
                        <input type="checkbox" name="tick" id="" /> iafree to the terms of services and privacy policy
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
}
const Page2=()=>{
    return(
        <>
        <div>
            <div>
                <h2>Business Details</h2>
                <p>Provide the Details of Your Business</p>
            </div>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="storename">Business/Store Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="description">Business Description</label>
                        <textarea name="description" id="" placeholder='tell about business'>hey</textarea>
                    </div>
                    <div>
                        <div><label htmlFor="type">
                            Business Type
                            </label>
                            <input type="text" />
                            </div>
                    </div>
                    <div>
                        <label htmlFor="address">Address </label>
                        <input type="text" name="address" id="" />
                    </div>
                    <div>
                        <label htmlFor="BusinessReg">Business Registeration Number</label>
                        <input type="text" name="BusinessReg" id="" placeholder='Tax Id/Business Registeration Number' />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

const Page3=()=>{
    return(
        <>
        <div>
            <div>
                <h1>Products And Shipping</h1>
                <p>Tell Us about your products and shipping options</p>
            </div>
            <div>
                <form action="">
                    <div>
                        <h4>What types of Products Do You want To sell</h4>
                        <p>Choose Any Of Four and write it down</p>
                        <div>
                            <label htmlFor="typesBusinees">Type Of product You Want To Sell</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="No.ofProducts">How many products do you want to sell intially??0-10</label>
                            <input type="number" name="No.ofProducts" id="" placeholder='enter the no.of product 0-10'/>
                        </div>
                        <div>
                            <label htmlFor="returnpolicy">Return Policy</label>
                            <input type="text" placeholder='Describe your return policy' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
const Page4=()=>{
    return(
    <>
    <div>
        <div>
            <h1>Review And Submit</h1>
            <p>Review your information before submitting</p>
        </div>
        <div>
            <h2>Basic Information</h2>
        </div>
        <div>
            <button type="button">Submit</button>
        </div>
    </div>
    </>)
}
export default BecomeVendor