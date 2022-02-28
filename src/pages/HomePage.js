import { Link } from 'react-router-dom';
import logo from "./logo-homeButton.png"
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import BasicTabs from '../components/LogAndReg/LogAndRegController';
import styles from './HomePage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {firstLoadedData, loadInitialData} from '../redux/actions/usersActions';

export default function HomePage() {

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  
  let usersData = require('../server/users.json')

  const firstLoadedDataState = useSelector(state => state.usersData.present.firstLoadedData)
  if(!firstLoadedDataState){
    dispatch(loadInitialData(usersData))
    dispatch(firstLoadedData())

  }

  
  return (
    <>

      <div className={styles.HomePageStyle}>
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ alignItems: 'flex-start', display: 'flex' }}>
            <Link to='/' >
              <>
                <img className={styles.logo} src={logo} alt="" />
              </>
            </Link>

            {/* products probably will be ul with few li(s) */}
            <Link to='/products' className={styles.links}>Products</Link>
            <Link to='/about' className={styles.links}>Learn</Link>
            <Link to='/safety' className={styles.links}>Safety</Link>
            <Link to='/support' className={styles.links}>Support</Link>
            <Link to='/download' className={styles.links}>Download</Link>
          </div>
          <div className={styles.buttonHolder} style={{ alignItems: 'center', display: 'flex' }}>
            <Button onClick={() => setShow(!show)} size="large" sx={{ color: 'rgb(214,1,46) ', backgroundColor: 'white', fontSize: '19px', margin: "30px", width: "120px" }}>Log in</Button>

          </div>
        </nav>

        <div className={styles.centeredDiv}>
          <h1>Swipe Right®</h1>
          <button onClick={() => setShow(!show)} className={styles.btnGrad} >Create account</button>
        </div>
        {
          show ? <div className={styles.SignForms}><BasicTabs></BasicTabs></div> : null
        }
      </div>


    </>
  )
}