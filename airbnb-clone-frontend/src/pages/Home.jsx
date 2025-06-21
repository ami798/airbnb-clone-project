import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';

function Home() {
  return (
    <div>
      <Navbar />

      <h1 style={{ padding: '1rem' }}>Property Listings</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <PropertyCard
          image="https://source.unsplash.com/300x200/?house"
          location="Addis Ababa"
          price="45"
          rating="4.8"
        />
        <PropertyCard
          image="https://source.unsplash.com/300x200/?apartment"
          location="Dire Dawa"
          price="35"
          rating="4.5"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
