import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = props => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    return (
        <div className='relative overflow-hidden' ref={ref}>
            {React.Children.map(props.children, (child) => {
                return (
                    <motion.div
                        key={child}
                        variants={{
                            hidden: { opacity: 0, y: 150},
                            visible: { opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.6}}
                    >
                        {child}
                    </motion.div>
                )
            })}

        </div>
    );
};

Reveal.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Reveal;
