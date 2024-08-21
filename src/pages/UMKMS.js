import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import Footer from "../components/Footer";
import KontenUMKM from '../components/KontenUMKM';
import HeroUMKMS from '../components/HeroUMKMS';

const UMKMS = () => {
    const {id} = useParams();
    return (
        <>
			<Header/>
            <HeroUMKMS umkmID= {id}/>
            <section>
                <KontenUMKM umkmID= {id}/>
            </section>
            <Footer />
        </>
    )
}

export default UMKMS