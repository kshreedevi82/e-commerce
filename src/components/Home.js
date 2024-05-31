import { Button } from '@mui/material';
import React from 'react';

function Home() {
  return (
    <div className='home'>
      <div className='main'>
      <h1 style={{color:"mediumvioletred"}}>Welcome To Shopping Website</h1>
      <h3 style={{color:"forestgreen",fontFamily:"Cursive"}}>Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them.</h3>
      <Button style={{width:200,height:40,background:"darksalmon"}}>Shop Now</Button></div>
      <div className='main1'>
        <img src="https://img.freepik.com/free-vector/shopping-cart-with-bags-gifts-concept-illustration_114360-18775.jpg?t=st=1717049446~exp=1717053046~hmac=6e11b3eada7e76e8f7f58b86351cc4e28b9d4b82d9a975b5b86f4b01ae76095f&w=740" width={500} height={500}/>
      </div>
    </div>
  );
}

export default Home;