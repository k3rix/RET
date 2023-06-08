import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AndroidSmall1.module.css';
import { ButtonBackspaceIcon } from './ButtonBackspaceIcon.js';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import { Ellipse4Icon } from './Ellipse4Icon.js';
import { Ellipse5Icon } from './Ellipse5Icon.js';
import { Ellipse6Icon } from './Ellipse6Icon.js';
import { Ellipse7Icon } from './Ellipse7Icon.js';
import { Ellipse8Icon } from './Ellipse8Icon.js';
import { Ellipse9Icon } from './Ellipse9Icon.js';
import { Ellipse10Icon } from './Ellipse10Icon.js';
import { Ellipse11Icon } from './Ellipse11Icon.js';
import { Ellipse12Icon } from './Ellipse12Icon.js';
import { Ellipse13Icon } from './Ellipse13Icon.js';
import { Ellipse14Icon } from './Ellipse14Icon.js';
import { Ellipse15Icon } from './Ellipse15Icon.js';
import { Ellipse18Icon } from './Ellipse18Icon.js';
import { Ellipse19Icon } from './Ellipse19Icon.js';
import { Rectangle1Icon } from './Rectangle1Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 2:3 */
export const AndroidSmall1: FC<Props> = memo(function AndroidSmall1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.ellipse11}>
        <Ellipse11Icon className={classes.icon} />
      </div>
      <div className={classes.unnamed}>.</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.unnamed2}>0</div>
      <div className={classes.ellipse12}>
        <Ellipse12Icon className={classes.icon2} />
      </div>
      <div className={classes._3}>3</div>
      <div className={classes.ellipse7}>
        <Ellipse7Icon className={classes.icon3} />
      </div>
      <div className={classes._2}>2</div>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon4} />
      </div>
      <div className={classes._1}>1</div>
      <div className={classes.ellipse13}>
        <Ellipse13Icon className={classes.icon5} />
      </div>
      <div className={classes._6}>6</div>
      <div className={classes.ellipse8}>
        <Ellipse8Icon className={classes.icon6} />
      </div>
      <div className={classes._5}>5</div>
      <div className={classes.ellipse4}>
        <Ellipse4Icon className={classes.icon7} />
      </div>
      <div className={classes._4}>4</div>
      <div className={classes.ellipse14}>
        <Ellipse14Icon className={classes.icon8} />
      </div>
      <div className={classes._9}>9</div>
      <div className={classes.ellipse9}>
        <Ellipse9Icon className={classes.icon9} />
      </div>
      <div className={classes._8}>8</div>
      <div className={classes.ellipse5}>
        <Ellipse5Icon className={classes.icon10} />
      </div>
      <div className={classes._7}>7</div>
      <div className={classes.rectangle22}></div>
      <div className={classes.unnamed3}>=</div>
      <div className={classes.ellipse18}>
        <Ellipse18Icon className={classes.icon11} />
      </div>
      <div className={classes.unnamed4}>+</div>
      <div className={classes.ellipse19}>
        <Ellipse19Icon className={classes.icon12} />
      </div>
      <div className={classes.unnamed5}>-</div>
      <div className={classes.ellipse15}>
        <Ellipse15Icon className={classes.icon13} />
      </div>
      <div className={classes.unnamed6}>×</div>
      <div className={classes.ellipse10}>
        <Ellipse10Icon className={classes.icon14} />
      </div>
      <div className={classes.unnamed7}>÷</div>
      <div className={classes.ellipse6}>
        <Ellipse6Icon className={classes.icon15} />
      </div>
      <div className={classes.c}>C</div>
      <div className={classes.buttonBackspace}>
        <ButtonBackspaceIcon className={classes.icon16} />
      </div>
      <div className={classes.rectangle1}>
        <Rectangle1Icon className={classes.icon17} />
      </div>
    </div>
  );
});
