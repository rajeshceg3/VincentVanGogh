import { motion } from 'framer-motion';

export const FadeText = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Custom ease similar to "ease-out-expo"
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Chapter = ({ children, className = '' }) => {
  return (
    <section className={`min-h-screen flex flex-col justify-center items-center py-24 px-6 md:px-12 relative ${className}`}>
      <div className="max-w-2xl w-full z-10">
        {children}
      </div>
    </section>
  );
};

export const Visual = ({ src, alt, caption, className = '' }) => {
  return (
    <motion.div
      className={`my-24 relative group ${className}`}
      initial={{ opacity: 0, filter: 'blur(10px) brightness(0.8)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px) brightness(1)' }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      <div className="overflow-hidden relative">
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover opacity-90 sepia-[0.2] contrast-[0.9] transition-all duration-1000 group-hover:sepia-0 group-hover:contrast-100 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-noise opacity-10"></div>
      </div>
      {caption && (
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-sm text-ink-light italic text-center font-serif tracking-wide"
        >
          {caption}
        </motion.p>
      )}
    </motion.div>
  );
};

export const Spacer = ({ size = 'medium' }) => {
    const height = {
        small: 'h-24',
        medium: 'h-48',
        large: 'h-96',
    }[size];

    return <div className={`w-full ${height}`} />;
}
