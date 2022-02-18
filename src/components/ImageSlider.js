import SimpleImageSlider from "react-simple-image-slider";
import pic1 from '../AvatarPicturesExp/1.jpg'
import pic2 from '../AvatarPicturesExp/2.jpg'
import pic3 from '../AvatarPicturesExp/3.jpg'
import pic4 from '../AvatarPicturesExp/4.jpg'

const images = [
  { url: pic1 },
  { url: pic2 },
  { url: pic3 },
  { url: pic4 },
];

const ImageSlider = () => {
  return (
    <div >
      <SimpleImageSlider
        width={375}
        height={470}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default ImageSlider;