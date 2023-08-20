import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loader } from './Loader/Loader';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    images: [],
    seachImg: '',
    page: 1,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.seachImg !== this.state.seachImg ||
      prevState.page !== this.state.page
    ) {
      const images = await this.fetchImage();

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        loading: false,
      }));
      console.log(images);
    }
  }

  changeImage = newImage => {
    if (newImage === '') {
      Report.warning('Please enter the name of the images');
    } else {
      this.setState({
        seachImg: `${Date.now()}/${newImage}`,
        images: [],
        page: 1,
      });
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.changeImage(evt.target.elements.seachImg.value);
    evt.target.reset();
  };

  handleLoader = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));
  };

  fetchImage = async () => {
    const imgIndex = this.state.seachImg.indexOf('/');
    const nameImg = this.state.seachImg.slice(imgIndex + 1);
    try {
      let response = await axios.get(
        `/?q=${nameImg}&page=${this.state.page}&key=38080803-2095028227abc5092026f2051&image_type=photo&orientation=horizontal&per_page=12`
      );
      return response.data.hits;
    } catch (error) {
      Report.failure(error);
    }
  };

  render() {
    const { images, loading, seachImg } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {loading && <Loader />}
        {images.length > 0 && seachImg !== '' && (
          <Button onClick={this.handleLoader} />
        )}
        <GlobalStyle />
      </>
    );
  }
}
