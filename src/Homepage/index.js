import React, { Component } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Whoweare from './components/Whoweare';
/*
import FeaturedProduct from './components/FeaturedProduct';
import Shopbyparts from './components/Shopbyparts';
import Maintenance from './components/Maintenance';
import Latestarticle from './components/Latestarticle';
import Laius from './components/Laius';
import Socialnetwork from './components/Socialnetwork';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

        <FeaturedProduct />
        <Shopbyparts />
        <Maintenance />
        <Latestarticle />
        <Laius />
        <Socialnetwork />
        <Newsletter />
        <Footer />

*/

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <Whoweare />
      </div>
    );
  }
}

export default Homepage;
