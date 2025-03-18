import React, { useState } from 'react'
import VendorContext from './vendorcontext';

const VendorContextProvider = ({children}) => {
    const [vendorApplication,setVendorApplication]=useState([]);
  return (
    <VendorContext.Provider value={{vendorApplication,setVendorApplication}}>
        {children}
    </VendorContext.Provider>
  )
}

export default VendorContextProvider
