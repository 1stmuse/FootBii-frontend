import React from 'react'

import Drawer from '../components/drawer/Drawer'
import Header from '../components/Header-Footer/Header'

const HomeLayout =({children}) =>{

  return (
    <div style={{minHeight:'650px', border:'1px solid red'}} className='view' >
        <Header/>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Drawer/>
            {children}
        </div>
         
    </div>
   )

}

export default HomeLayout