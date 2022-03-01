import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = (props) => {

  function mapImages(images){
    const pics = []
    for (let i = 0; i < images.length; i++) {
      pics.push({url: images[i]})
      
    }
    return pics;
  }
  

  return (
    <div>
      <SimpleImageSlider
        style={{borderRadius:"10%"  }}
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