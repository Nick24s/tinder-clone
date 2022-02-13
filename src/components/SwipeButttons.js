import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BoltIcon from '@mui/icons-material/Bolt';
import { IconButton } from '@mui/material';
import './SwipeButtons.css'

export default function SwipeButtons(){


    return (
        <>
            <div className='swipeButts'>
                <IconButton className='swipeButt_rep'>
                    <ReplayIcon fontSize='large'></ReplayIcon>
                </IconButton>
                <IconButton className='swipeButt_close'>
                    <CloseIcon fontSize='large'></CloseIcon>
                </IconButton>
                <IconButton className='swipeButt_star'>
                    <StarIcon fontSize='large'></StarIcon>
                </IconButton>
                <IconButton className='swipeButt_fav'>
                    <FavoriteIcon fontSize='large'></FavoriteIcon>
                </IconButton>
                <IconButton className='swipeButt_bolt'>
                    <BoltIcon fontSize='large'></BoltIcon>
                </IconButton>
                
            </div>
        </>
    )
}