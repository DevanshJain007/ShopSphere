import React, { useContext, useState } from 'react'
import VendorContext from '../context/vendor-context/vendorcontext'

const AdminPage = () => {
    const {vendorApplication}=useContext(VendorContext);
    console.log("vendorApplication",vendorApplication);
    
  return (
    <div>
      <h1>Welcome Admin</h1>
      <div>
        {vendorApplication.map((applications,index)=>{
            return(
                <>
                <div key={index}>
                    <p>{applications.fname}</p>
                </div>
                </>
            )
        })}
      </div>
    </div>
  )
}

export default AdminPage
