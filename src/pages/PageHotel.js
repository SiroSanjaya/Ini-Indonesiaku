import React, { Component } from "react";
import Header from "../components/Header";
import pageHotel from "../json/PageHotel.json"
import Hero from "../components/Hero-Staycasion";
import MostPicked from "../components/MostPicked-Staycasion";
import Categories from "../components/Categories-Staycasion";
import Footer from "../components/Footer";

export default class PageHotel extends Component {
    render() {
        return (
          <>
            <Header />
            <Hero data={pageHotel.hero}/>
            <MostPicked data={pageHotel.mostPicked}/>
            <Categories data={pageHotel.categories}/>
            <Footer />
          </>
        );
      }
    }
