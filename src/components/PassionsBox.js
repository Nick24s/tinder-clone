import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import styles from './PassionsBox.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Chip from '@mui/material/Chip';
import { addPassions, deletePassions } from '../redux/actions/usersActions';
import { pink } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 280,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Passions(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = useSelector(state => state.usersData.present.loggedUser);
  const dispatch = useDispatch();
  let allPassions = require('../server/passions.json')
  const [pass, setPass] = useState([]);

  const [progress, setProgress] = useState(0);

  const handlePassionAdd = (number) => {
    setPass([...pass,number]);
  }

  const submitPassions = () => {
    dispatch(addPassions(pass, userId))
  }

  const clearPassions = () => {
    setPass([])
    dispatch(deletePassions(userId))
  }

  return (
    <div>
      <Button className={styles.ModalBtn} onClick={handleOpen}>Add passions</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className={styles.Passions}>
                {allPassions.map((passion, index) => (<>
                    <Chip sx={{backgroundColor: pink[400]}} label={passion} onClick={() => handlePassionAdd(passion)}></Chip>
                </>))}
                
            </div>
            <button className={styles.SumbitBtn} onClick={submitPassions}>Submit Passions</button>
            <button className={styles.ClearBtn} onClick={clearPassions}>Clear</button>
            <p>Your passion are: [{pass.map((pass, i) => (i == 0) ? (pass): (", " + pass))}]</p>
        </Box>
      </Modal>
    </div>
  );
}