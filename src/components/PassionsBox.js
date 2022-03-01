import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import styles from './PassionsBox.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Chip from '@mui/material/Chip';
import { addPassions, deletePassions } from '../redux/actions/usersActions';
import { pink } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  height: "auto",
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
  const user = useSelector(state => (state.usersData.present.usersData).filter(user => user.ID === userId)[0]);
  const [pass, setPass] = useState(user.passions);
  const handlePassionAdd = (passion) => {
    if (pass.length <= 4 && !pass.includes(passion)){
        setPass([...pass, passion]);
    }
    
  }

  const submitPassions = () => {
    dispatch(addPassions(pass, userId))
    setOpen(false)
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
            {allPassions.map((passion) => (<div key={passion}>
              <Chip sx={{ backgroundColor: pink[400], fontWeight: "600", fontSize: "15px" }} label={passion} onClick={() => handlePassionAdd(passion)}></Chip>
            </div>))}

          </div>
            <Button sx={{ margin: "0px 0px 0px 55px"}} onClick={submitPassions} variant="contained" color="secondary" endIcon={<SendIcon />}>
            Submit
          </Button>
            <Button sx={{ margin: "0px 0px 0px 55px"}} onClick={clearPassions} variant="outlined" color="secondary" endIcon={<DeleteIcon />}>
            Clear
            </Button>
          <p>{`(${pass.length}/5)`} Your passion are: {pass.join(", ")}</p>
        </Box>
      </Modal>
    </div>
  );
}