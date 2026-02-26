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

  // Restore scroll position on mount
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('ucinkujiciScrollY');
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY));
      sessionStorage.removeItem('ucinkujiciScrollY');
    }
  }, []);

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
    // Save current scroll position before navigating
    sessionStorage.setItem('ucinkujiciScrollY', window.scrollY.toString());
    
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
            {layout.positions.map((pos, index) => {
              const klub = ucinkujici[pos.klubIndex];
              const [offsetX, offsetY] = pos.offset || [0, 0];
              const animationDelay = `${(index * 0.3) % 3}s`;
              return (
                <div
                  key={`${breakpoint}-${pos.klubIndex}`}
                  className={styles.circlePosition}
                  style={{
                    gridColumn: pos.column,
                    gridRow: pos.row,
                    transform: `translate(${offsetX}rem, ${offsetY}rem)`
                  }}
                  onClick={() => handleKlubClick(klub.url)}
                >
                  <Circle
                    h1Text={klub.h1text || false}
                    h2Text={klub.h2text || false}
                    h3Text={klub.h3text || false}
                    h3TextTop={klub.h3textTop || false}
                    position="relative"
                    size="small"
                    animationDelay={animationDelay}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </HeaderContainer>
    </Layout>
  );
}
