import React, { Component } from "react";
import HeroDestination from "../components/HeroDestination";
import MainUMKM from "../components/MainUMKM";
import Recommendationsumkm from "../components/recommendationsumkm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import  MainUMK from "../components/MainUMK";

class UMKM extends Component {
	render() {
		return (
			
			<div>
				<Header />
	
				<HeroDestination />


				<MainUMKM/>
				< MainUMK/>
				<section>
				<Recommendationsumkm/>
				</section>
				<Footer />
			</div>
			
		)
	}
}

export default UMKM;