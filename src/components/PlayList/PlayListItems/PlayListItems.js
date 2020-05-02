import React from 'react'
import classes from './PlayListItems.module.css'
import playButton from '../../../asset/images/Path.jpg'
import heart from '../../../asset/images/heart2.png';
import headphone from '../../../asset/images/headphone.png';
import cloudimg from '../../../asset/images/Group76.png';
import BorderLinearProgress from '@material-ui/core/LinearProgress';
const PlayListItems = ({imgLogo, name, title, description, likes, listen, cloud}) => {
    return (
        <div className={classes.playListItems}>
            <div className={classes.imgPlayList}>
                <img src={imgLogo} alt={imgLogo} />
                <div className={classes.playButton}>
                    <img src={playButton} alt={playButton}/>
                </div>
            </div>
            <div>
                <div className={classes.name}> {name} </div>
                <div className={classes.title}> {title} </div>
                <div className={classes.description}> {description} </div>
                <div className={classes.likebar}>
                    <div className={classes.likesContainer}>
                        <img src={heart} alt={heart} />
                        {likes}
                    </div>
                    <div className={classes.likesContainer}>
                        <img src={headphone} alt={headphone} />
                        {listen}
                    </div>
                    <div className={classes.likesContainer}>
                        <img src={cloudimg} alt={cloudimg} />
                        {cloud}
                    </div>
                    <BorderLinearProgress
                    className={classes.margin}
                     variant="determinate"
                     color="secondary"
                     value={50}
                  />
                </div>
            </div>
        </div>
    )
}

export default PlayListItems
