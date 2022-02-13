import './HomePageStyle.css';
import {  Link } from 'react-router-dom';
import logo from "./logo-homeButton.png"
import Button from '@mui/material/Button';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../SignInForm';
import { useState } from 'react';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';


export default function HomePage(){

    const [show , setShow] = useState(false);

    return (
        <>
         <div className="HomePageStyle">
        <nav style={{ display: 'flex' , justifyContent: 'space-between'}}>
          <div style={{ alignItems: 'flex-start' , display: 'flex' }}>
            <Link to='/' >
              <>
                <img className='logo' src={logo} alt="" />
              </>
            </Link>

            {/* products probably will be ul with few li(s) */}
            <Link to='/products' className='links'>Products</Link>
            <Link to='/about' className='links'>Learn</Link>
            <Link to='/safety' className='links'>Safety</Link>
            <Link to='/support' className='links'>Support</Link>
            <Link to='/download' className='links'>Download</Link>
          </div>
          <div className='buttonHolder' style={{alignItems: 'center'  ,  display: 'flex' }}>
            <Button  onClick={() => setShow(!show)}  size="large" sx={{ color: 'rgb(214,1,46) ', backgroundColor: 'white' ,  fontSize: '19px'  , margin : "30px" , width : "120px"}}>Log in</Button>
       
          </div>
        </nav>

      <div className='centeredDiv'>
        <h1>Swipe Right®</h1>
        <button className='btn-grad' >Create account</button>
      
      </div>
      {
          show?<div className='SignForms'>{<SignUpForm></SignUpForm>}</div>:null
        }
    </div>
   
  
        </>
    )
}