import { useState } from 'react'; 
import { cva } from "class-variance-authority";

export default function ButtonSquare() {

    return <button {...rest} className={button({ intent, size, className })} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      >
        <img className="w-4" src={ hovered ? likeHover : like} alt="like" />
    </button>
    ;
  }
  