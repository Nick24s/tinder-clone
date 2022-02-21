import SimpleImageSlider from "react-simple-image-slider";
import { propTypes } from "react-tinder-card";
import pic1 from '../AvatarPicturesExp/1.jpg'
import pic2 from '../AvatarPicturesExp/2.jpg'
import pic3 from '../AvatarPicturesExp/3.jpg'
import pic4 from '../AvatarPicturesExp/4.jpg'

// const images = [
//   { url: pic1 },
//   { url: pic2 },
//   { url: pic3 },
//   { url: pic4 },
// ];

const ImageSlider = (props) => {

  function mapImages(images){
    const pics = []
    for (let i = 0; i < images.length; i++) {
      pics.push({url: images[i]})
      
    }
    return pics
  }

  return (
    <div >
      <SimpleImageSlider
        width={380}
        height={550}
        images={mapImages(props.images)}
        showBullets={false}
        showNavs={true}
        loop={false}
        navSize={30}
        navStyle={2}
        navMargin={10}
        slideDuration={0.3}
      />
    </div>
  );
}
export default ImageSlider;