import React from "react";

import classes from "./Main.module.css";

const Main = () => {
  const arr = [
    'You cannot change what you are, only what you do. -Philip Pullman-', 
  'Lay a firm foundation with the bricks that others throw at you, -David Brinkley-',
  'Change the way you look at things and the things you look at change. -Wayne Dyer-',
  'If you run you stand a chance of losing, but if you don’t run you’ve already lost. -Barack Obama-',
  'If you have always done it that way, it is probably wrong. -Charles Kettering-',
  'The greatest mistake you can make in life is to be continually fearing you will make one. -Elbert Hubbard-',
  'Not everything that is faced can be changed, but nothing can be changed until it is faced. -James Baldwin-',
  'If work were so pleasant, the rich would keep it for themselves. –Mark Twain-',
  'I cannot say whether things will get better if we change; what I can say is they must change if they are to get better. -Georg C. Lichtenberg-',
  'When we are no longer able to change a situation, we are challenged to change ourselves. -Viktor Frankl-'
]

  const randomNum = Math.floor(Math.random() * (9-0) + 0)

  return (
    <div className={classes.main}>
      <div className={classes.title}>M&MZ</div>
      <div className={classes.title_2}>
        <span>{arr[randomNum]}</span>
      </div>
    </div>
  );
};

export default Main;
