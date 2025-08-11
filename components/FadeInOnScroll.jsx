import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FadeInOnScroll({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={hasAnimated ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
}
