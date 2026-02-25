"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import ucinkujici from "@/data/ucinkujici.json";
import layoutConfig from "@/data/ucinkujiciLayout.json";
import Citate from "@/components/Citate/Citate";
import { Klub } from "@/components/Klub/Klub";
import styles from "./Ucinkujici.module.scss";
import { Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import { QUOTES } from "@/constants";
import { HeaderContainer } from "@/components/Layout/Layout";
import Circle from "@/components/common/Circle/Circle";

export default function UcinkujiciPage() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [breakpoint, setBreakpoint] = useState('desktop');

  const headerParagraph =
    "Níže naleznete přehled škol, hostů a skupin, které se zúčastní 7. ročníku Budō matsuri. Každý z nich přináší vlastní zaměření, zkušenosti i způsob práce. Dohromady tvoří unikátní atmosféru celé události.";

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newBreakpoint = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
      if (newBreakpoint !== breakpoint) setBreakpoint(newBreakpoint);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  // Memoize layout to prevent recalculation
  const layout = useMemo(() => layoutConfig[breakpoint], [breakpoint]);

  const handleKlubClick = (url) => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push(`/ucinkujici/${url}`);
    }, 150);
  };
  return (
    <Layout
      backgroundImage={"/backgrounds/brush1.svg"}
      backgroundMarginTop="18rem"
    >
      <HeaderContainer
        header={"KDO SE PŘEDSTAVÍ?"}
        subheader={"7. ročník budo matsuri"}
        rightText={headerParagraph}
      >
        <section>
          <div 
            className={styles.bubbleGrid}
            style={{
              gridTemplateColumns: `repeat(${layout.columns}, 1fr)`,
              gridTemplateRows: `repeat(${layout.rows}, 15rem)`
            }}
          >
            {layout.positions.map((pos) => {
              const klub = ucinkujici[pos.klubIndex];
              const [offsetX, offsetY] = pos.offset || [0, 0];
              return (
                <div
                  key={`${breakpoint}-${pos.klubIndex}`}
                  className={styles.circlePosition}
                  style={{
                    gridColumn: pos.column,
                    gridRow: pos.row,
                    transform: `translate(${offsetX}rem, ${offsetY}rem)`
                  }}
                >
                  <Circle
                    h2Text={klub.name}
                    position="relative"
                    size="small"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* <div 
        className={`flex flex-col h-screen transition-opacity duration-300 ${
          isNavigating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <main className="flex-grow">
          <h2 className="sm:my-32 my-16 mt-28 text-center">
            Účinkující pro ročník 2026
          </h2>
          <div className={`mb-32 ${styles.gridContainer}`}>
            {ucinkujici.map((klub) => {
              return (
                <div 
                  key={klub.name} 
                  onClick={() => handleKlubClick(klub.url)}
                  className="block cursor-pointer"
                >
                  <Klub data={klub} />
                </div>
              );
            })}
          </div>
          <Citate citate={QUOTES[1].text} author={QUOTES[1].author} />
          <SocialNetworks />
        </main>
      </div> */}
      </HeaderContainer>
    </Layout>
  );
}
