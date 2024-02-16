import React from "react";
import { Citate } from "../components/Citate";
import { Hero } from "../components/Hero";
import { Information } from "../components/Information";
import { SocialNetworks } from "../components/SocialNetworks";
import { Partners } from "../components/Partners";

export const MainPage = () => (
    <div className="container-fluid">
        <Hero />
        <Information />
        <Citate
            citate="Účelem tréninku je utáhnout oslabené, posílit tělo a vyleštit ducha."
            author="Morihei Ueshiba, zakladatel Aikido" />
        <SocialNetworks />
        <Partners />
    </div>
);
