import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './imageUploader.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../redux/actions/usersActions';

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

export default function ImageUploader(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = useSelector(state => state.usersData.present.loggedUser);
  const user = useSelector(state => (state.usersData.present.usersData).filter(user => user.ID === userId)[0]);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  

  const handleChange = (e) => {
      if (e.target.files[0]){
          setImage(URL.createObjectURL(e.target.files[0]))
      }
  }

  const handleUpload = (e) => {
    if (image != null){
      dispatch(uploadImage([...user.photos, image], userId));
      setOpen(false);
      props.appendImg(image)
      setImage(null);
    } else {
      alert("Please Insert Photo")
    }
    
    
  }

  return (
    <div>
      <Button onClick={handleOpen}>Add Media</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className="modal-body">
                {image === null ? <></> : <img src={image} alt='Image to upload' className={styles.ImageBox}></img>}
                
                <input type="file" accept="image/*" onChange={handleChange} placeholder='Select From Computer'/>
                <button type="submit" onClick={handleUpload} className='submitUpload'>Upload</button> 
            </div>
        </Box>
      </Modal>
    </div>
  );
}