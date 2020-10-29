import React from 'react';
import { motion } from 'framer-motion';

export default function Animator({ children }) {
    return (
        <motion.div className="linkContent"
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0.5 }}
        >
            {children}
        </motion.div>
    );
}