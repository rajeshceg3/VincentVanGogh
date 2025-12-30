import React, { useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { content } from './content';
import { Chapter, FadeText, Visual, Spacer } from './components/Core';

function App() {
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress for parallax or progress indicators if needed
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '10%']);
  const grainOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.03, 0.05, 0.03]);

  // Prevent default scroll restoration to ensure experience starts at top
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <div className="bg-canvas text-paper min-h-screen relative overflow-hidden font-serif selection:bg-ochre selection:text-ink">

      {/* Ambient Noise / Grain Layer */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
          opacity: grainOpacity
        }}
      />

      {/* Subtle background parallax element (e.g., a faint gradient or texture) */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-canvas via-canvas-light to-canvas"
        style={{ y: backgroundY }}
      />


      <main className="relative z-10 container mx-auto px-4 sm:px-8 max-w-4xl">

        <Spacer size="large" />

        {/* Title / Intro */}
        <Chapter className="text-center">
          <FadeText delay={0.5}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-faded-gold opacity-90 mb-8 font-normal">
              Vincent
            </h1>
          </FadeText>
          <FadeText delay={1.5} className="mt-12 space-y-4 text-lg md:text-xl text-stone-400 font-light italic leading-relaxed">
             {content.find(c => c.type === 'intro').text.map((line, i) => (
                <p key={i}>{line}</p>
             ))}
          </FadeText>
        </Chapter>

        <Spacer size="medium" />

        {/* Chapters */}
        {content.filter(c => c.type === 'chapter').map((chapter, index) => (
          <React.Fragment key={chapter.id}>
            <Chapter>
              <FadeText>
                 <div className="flex flex-col items-center">
                    <span className="text-xs tracking-[0.2em] uppercase text-ink-light mb-6 border-b border-ink-light/20 pb-2">
                        {chapter.theme}
                    </span>
                    <p className="text-xl md:text-2xl leading-relaxed text-center font-serif text-stone-300 mb-12 italic max-w-lg">
                      {chapter.prose}
                    </p>
                 </div>
              </FadeText>

              <Visual
                src={chapter.image}
                caption={chapter.caption}
                alt={chapter.theme}
              />

              <FadeText delay={0.2}>
                <div className="prose prose-lg prose-invert prose-p:text-paper/80 prose-p:font-light prose-p:leading-loose mx-auto">
                  <p>{chapter.body}</p>
                </div>
              </FadeText>
            </Chapter>

            <Spacer size={index === content.length - 2 ? 'large' : 'medium'} />
          </React.Fragment>
        ))}

        <Spacer size="large" />

        {/* Outro */}
        <Chapter className="text-center pb-32">
           <FadeText>
              <div className="space-y-6 text-xl md:text-2xl text-stone-400 font-light italic">
                {content.find(c => c.type === 'outro').text.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
           </FadeText>
           <div className="mt-24 h-px w-24 bg-gradient-to-r from-transparent via-ink-light to-transparent mx-auto opacity-30"></div>
        </Chapter>

      </main>
    </div>
  );
}

export default App;
