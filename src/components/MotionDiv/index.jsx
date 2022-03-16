import { motion } from "framer-motion";

const MotionDiv = ({children}) => {
    return (
        <motion.div
            style={{width: '80%'}}
            initial={{x:-500}}
            animate={{x: 0, transiton:{duration: 50, type:"spring"}}}
            exit={{x:500, transiton:{duration: 50, type:"spring", ease: 'easeInOut'}}}
        >
            {children}
        </motion.div>
    )
}

export default MotionDiv