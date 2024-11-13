'use client';

import { motion } from 'framer-motion'
import { GiShoppingCart } from 'react-icons/gi';

export default function TrolleyLoader({ size = 40, color = 'ceruleanBlue' }: { size?: number; color?: string }) {
  return (
    <div className="flex items-center justify-center w-1/2 h-1/2" role="status" aria-label="Loading">
      <motion.div
        animate={{
          x: [-50, 50, -50],
          scaleX: [1, 1, -1, -1, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatDelay: 0
        }}
      >
        <GiShoppingCart size={size} color={color} />
      </motion.div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}