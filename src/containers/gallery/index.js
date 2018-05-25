import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1187/v1527225756/mip/engagements/Marilyn_and_Kip_film-14.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_978/v1527225987/mip/engagements/Marilyn_and_Kip_film-21.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1179/v1527226023/mip/engagements/Marilyn_and_Kip-43.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1154/v1527225993/mip/engagements/Marilyn_and_Kip_film-18.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1080/v1527225911/mip/engagements/Marilyn_and_Kip-109.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1058/v1527225930/mip/engagements/Marilyn_and_Kip-101.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1187/v1527225884/mip/engagements/Marilyn_and_Kip_film-22.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1134/v1527225882/mip/engagements/Marilyn_and_Kip_film-52.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1134/v1527226023/mip/engagements/Marilyn_and_Kip_film-13.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1152/v1527225870/mip/engagements/Marilyn_and_Kip_film-50.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1134/v1527225872/mip/engagements/Marilyn_and_Kip_film-19.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1138/v1527225958/mip/engagements/Marilyn_and_Kip-159.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1161/v1527225835/mip/engagements/Marilyn_and_Kip_film-12.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1124/v1527225850/mip/engagements/Marilyn_and_Kip-106.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1366/v1527225793/mip/engagements/Marilyn_and_Kip_film-63.jpg', width: 4, height: 3 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1000/v1527225853/mip/engagements/Marilyn_and_Kip_film-62.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1108/v1527225794/mip/engagements/Marilyn_and_Kip_film-41.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_978/v1527225756/mip/engagements/Marilyn_and_Kip_film-14.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1056/v1527225817/mip/engagements/Marilyn_and_Kip_film-7.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1155/v1527225761/mip/engagements/Marilyn_and_Kip-103.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1082/v1527225775/mip/engagements/Marilyn_and_Kip_film-56.jpg', width: 3, height: 4 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1207/v1527266383/mip/engagements/Marilyn_and_Kip-173.jpg', width: 4, height: 3 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1578/v1527266383/mip/engagements/Marilyn_and_Kip-49.jpg', width: 4, height: 3 },
  { src: 'http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1156/v1527266384/mip/engagements/Marilyn_and_Kip-27.jpg', width: 3, height: 4 },
];


class Photos extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div id="photos">
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
export default Photos