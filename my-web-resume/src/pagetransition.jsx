import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}     // 進場前
      animate={{ opacity: 1, y: 0 }}      // 進場
      exit={{ opacity: 0, y: -30 }}        // 離場
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{width : "100%", height : "100%"}}
    >
      {children}
    </motion.div>
  );
}
