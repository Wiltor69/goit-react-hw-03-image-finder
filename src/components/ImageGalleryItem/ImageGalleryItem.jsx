import Modal from 'react-modal';
import { GalleryItem, Image, StyleModal } from './ImageGalleryItem.styled';

import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: null,
  };

  openModal = imgId => this.setState({ isModalOpen: imgId });

  closeModal = () => this.setState({ isModalOpen: null });

  render() {
    const { imageItem } = this.props;

    return imageItem.map(image => {
      const { id, webformatURL, q, largeImageURL } = image;

      return (
        <GalleryItem key={id}>
          <Image
            src={webformatURL}
            alt={q}
            onClick={() => this.openModal(id)}
          />

          <Modal
            isOpen={this.state.isModalOpen === id}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <StyleModal src={largeImageURL} alt={q} />
          </Modal>
        </GalleryItem>
      );
    });
  }
}
