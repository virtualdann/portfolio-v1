import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { motion, inView } from 'framer-motion';

const ScrollReveal = props => {
    const myRef = useRef(null);
    const [posY, setPosY] = useState("-100%");



    return (
        <motion.div
            variants = {{
                hidden: {y: "-100%"},
            }}
           >
            {props.children}
        </motion.div> 
    );
};

ScrollReveal.propTypes = {
    children: PropTypes.element.isRequired
};

export default ScrollReveal;