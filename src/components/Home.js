import React from 'react';
import {Container, Button, Typography, Paper} from '@mui/material';
import ReactPlayer from 'react-player';
import videoSrc from '../assets/video/WhatsApp Video 2022-07-03 at 4.27.18 AM.mp4';
import './home.css';
import {motion} from 'framer-motion';
import lagu from '../assets/music/Micah Edwards - Moments (Official Video).mp3';
import Ucapan from './Ucapan';
import CreatedBy from './Createdby';

function Home(){
    // State for video duration
    // State for showing card js
    // It show when the button next is click
    // And if button clicked the music start
    // Id Reff for auto scroll content
    const [onEnd, setOnEnd] = React.useState(false);
    const [afterClick, setAfterClick] = React.useState(false);
    const [soundPlay, setSoundPlay] = React.useState(false);
    const soundElem = React.useRef();
    // const cardRef = React.useRef<HTMLInputElement>(null);

    // What to do when vid duration end => Set state to true and show the button
    const buttonHandler = (e) =>{
        if (e){
            setOnEnd(true);
        }
    };
    // What to do when button clicked => Set click state to true, show the Card component, play the bg music, and scroll the page to the new Card section
    const clicked = (e) => {
        // const element = 
        if (e){
            setAfterClick(true);
            // setSoundPlay(!soundPlay);
            setSoundPlay(!soundPlay);
            soundElem.current.play();
            document.getElementById('Kartu').scrollIntoView({
                behavior: "smooth"
            });
            
        }
    }

    return(
        <Container
            style={{
                padding:20
            }}
        >
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className="home">
                <motion.div 
                initial={{x:"-100vw"}}
                animate={{x:"0"}}
                transition={{duration:2}}
                className="text">
                    <Typography
                            variant="h6"
                            align="center"
                            className="caption"
                        >
                            Diputer ya video nya, Bayek Gede wkwkw...
                    </Typography>
                </motion.div>
                <ReactPlayer 
                    url={videoSrc}
                    controls={true}
                    style={{
                        width:"100%",
                        height:"100%",
                        borderRadius:20
                    }}
                    width="100%"
                    height="100%"
                    className="video"
                    onEnded={(onEnded)=> {buttonHandler(true)}}
                />
                {onEnd && (
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:2}}
                >
                    <audio src={lagu} ref={soundElem} />
                    <Button
                        size="medium"
                        variant="contained"
                        style={{
                            marginTop:15,
                            width: "100%"
                        }}
                        soundPlay={soundPlay}
                        soundElem={soundElem}
                        onClick={()=>clicked(true)}
                        className="Tombol"
                    >Tombolnya minta di klik nih :)
                    </Button>
                </motion.div>
                )}
                {afterClick && (
                    <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:2}}
                    className="Kartu"
                    id="Kartu">
                        <Paper
                            variant="outlined"
                            elevation={16}
                            style={{
                                width:"100%",
                                minHeight:"fit-content",
                                marginTop:"1em",
                                borderRadius:20
                            }}
                            className="paper"
                        >
                            <Ucapan />
                        </Paper>
                        <CreatedBy/>
                    </motion.div>
                )}
            </motion.div>
        </Container>
    )
}

export default Home;