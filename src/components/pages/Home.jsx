import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlice from './ThirdSlice';
import FourthSlice from './FourthSlice';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const panels = gsap.utils.toArray('.panel');
    const tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: 'top top' }));

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () => (panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom'),
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          const panelStarts = tops.map(st => st.start);
          const snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: 0.5,
      },
    });

    // Create a Timeline animation for moving subsequent panels on top of the first panel
    panels.slice(1).forEach((panel, i) => {
      gsap.from(panel, {
        y: '100%', // Start position (slide in from bottom)
        duration: 1,
        scrollTrigger: {
          trigger: panels[i], // Trigger when the previous panel comes into view
          start: 'top bottom', // Start when the previous panel's bottom hits the top of the viewport
          end: 'bottom bottom', // End when the current panel's bottom hits the bottom of the viewport
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div>
      <div className="panel h-screen">
        <FirstSlide />
      </div>
      <div className="panel h-screen">
        <SecondSlide />
      </div>
      <div className="panel h-screen">
        <ThirdSlice />
      </div>
      <div className="panel h-screen">
        <FourthSlice />
      </div>
    </div>
  );
};

export default Home;
