import { motion } from "framer-motion";

function Button({ icon, onClick, className="", label=""}){
    return (
        <motion.button
            onClick={onClick}
            aria-label={label}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className={`bg-white dark:bg-zinc-800 p-4 rounded-full text-zinc-900 dark:text-white shadow-lg transition-all ${className}`}
        >
            {icon}
        </motion.button>
    )
}

export default Button;