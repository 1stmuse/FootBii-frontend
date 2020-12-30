import React from 'react'

import HomeLayout from '../../HOC/HomeLayout'
import ShoeInfo from './ShoeInfo'

const ShoeDetails =({match, history}) =>{
    const path = match.params.id
    // console.log(path)
  return (
    <HomeLayout>
        <ShoeInfo location={history} id ={path} />
    </HomeLayout>
   )

}

export default ShoeDetails