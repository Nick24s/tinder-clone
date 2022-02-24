import SimpleImageSlider from "react-simple-image-slider";
import { propTypes } from "react-tinder-card";

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
        // images={images}
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