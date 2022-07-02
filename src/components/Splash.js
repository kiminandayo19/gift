import React from 'react';
import {Container} from '@mui/material';
import {motion} from 'framer-motion';

function Splash(){
    return(
        <div className="splash">
            <Container>
                <motion.h1
                    initial={{x:"-100vw"}}
                    animate={{x:0}}
                    transition={{duration:2}}
                >
                    Halo
                </motion.h1>
                <motion.h3
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:2, delay:2}}
                >
                    Moodnya bagus kan?
                </motion.h3>
                <motion.h6
                    initial={{x:"100vw"}}
                    animate={{x:0}}
                    transition={{duration:2, delay:3}}
                >
                    Nih hadiah biar ga dibilang PHP wkwkw...
                </motion.h6>
            </Container>
        </div>
    )
}
export default Splash;