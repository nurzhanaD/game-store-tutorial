import React from 'react';
import './GameItem.css';
import { GameCover } from '../gameCover';
import { GameBuy } from '../gameBuy';
import { GameGenre } from '../gameGenre';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setCurrentGame} from '../../redux/games/Reducer.js'

export function GameItem({game}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  }

  return (
    <div className="GameItem" onClick={ handleClick }>
        <GameCover image={game.image} />
        <div className="game-item-details">
            <div className="game-item-title">{game.title}</div>
            <div className="game-item-genre">
                {game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)}
            </div>
            <div className="game-item-buy">
                <GameBuy game={game} />
            </div>
        </div>
    </div>
  )
}
