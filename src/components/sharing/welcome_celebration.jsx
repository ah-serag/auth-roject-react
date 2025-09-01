import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function WelcomeCelebration({ name = "", open = true, onClose }) {

  useEffect(() => {
    if (open) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative rounded-2xl bg-gray-800 p-8 shadow-2xl text-center max-w-sm w-full overflow-hidden"
            initial={{ y: 30, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 250 }}
          >
            {/* دوائر متحركة كخلفية */}
            <motion.div
              className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500/40"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400/40"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <motion.h1
              className="relative text-2xl font-bold mb-2 text-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              Welcome {name}
            </motion.h1>

            <motion.p
              className="relative text-gray-300 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Your account has been created successfully 
            </motion.p>

            <motion.button
              onClick={onClose}
              className="relative rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 text-white font-semibold shadow hover:brightness-110 transition"
              whileTap={{ scale: 0.95 }}
            >
              Continue
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
