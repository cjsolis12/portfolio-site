import { Transition } from 'react-transition-group';
import { useAnimation } from 'framer-motion';

const EnterTransition = ({ children }) => {
  const controls = useAnimation();

  return (
    <Transition
      in={true} 
      timeout={500} 
      onEnter={() => controls.start({ opacity: 1, y: 0 })}
      onExit={() => controls.start({ opacity: 0, y: 20 })}
    >
      {(state) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className={`transition-enter-${state}`}
        >
          {children}
        </motion.div>
      )}
    </Transition>
  );
};

export default EnterTransition