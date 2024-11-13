'use client';

import { motion } from 'framer-motion';
import { GiShoppingCart } from 'react-icons/gi';

interface TrolleyLoaderProps {
  size?: number;
  color?: string;
  title?: string;
}

export default function TrolleyLoader({ 
  size = 40, 
  color = '#268fcd',
  title = 'Loading...'
}: TrolleyLoaderProps) {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-blackaccent/15" role="status" aria-label="Loading">
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            x: [-50, 50, -50],
            scaleX: [1, 1, -1, -1, 1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 0
          }}
        >
          <GiShoppingCart size={size} color={color} />
        </motion.div>
        {title && (
          <p className="mt-4 text-sm font-medium text-gray-600">{title}</p>
        )}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
