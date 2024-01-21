import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';


 const SectionWrapper = (Component, idName)=> 
function HOC()
{
    return (
        //animation no longer stuck
        <motion.section 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            
          {/* when click toggle button then show sections mtlb wo neche le jae ga */}
            <span className='hash-span' id={idName}> &nbsp;</span> 
            
            <Component />
        </motion.section>
    )
}




 
 
 export default SectionWrapper
 