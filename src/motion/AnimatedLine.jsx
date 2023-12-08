import React, {useRef, useEffect} from "react";
import { motion, useInView, useAnimation } from "framer-motion";


function AnimatedLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true}); 

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);


  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.3 }}
      className={`animatedLine`}
    >
    </motion.div>
  );
}

export default AnimatedLine;