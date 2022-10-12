import React, { FC } from 'react';
import styles from './MediaViewport.module.scss';
import phaserGame from "../../phaser/PhaserGame";
import HelloWorldScene from "../../phaser/scenes/HelloWorldScene";

const handleClick = () => {
    const scene = phaserGame.scene.keys.helloworld as HelloWorldScene
    scene.createEmitter()
}

interface MediaViewportProps {}

const MediaViewport: FC<MediaViewportProps> = () => (
  <div className={styles.MediaViewport} data-testid="MediaViewport">
    MediaViewport Component
      <button className="App-button" onClick={handleClick}>
          Or click me
      </button>
      <div id="phaser-container"></div>
  </div>
);

export default MediaViewport;
