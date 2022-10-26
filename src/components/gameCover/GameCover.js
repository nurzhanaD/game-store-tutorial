import React from 'react';
import './GameCover.css';

export function GameCover({image = ""}) {
  return (
    <div className="GameCover" style={{backgroundImage:`url(${image})`}}></div>
  )
}
