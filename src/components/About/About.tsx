import { FC } from 'react';
import styles from './About.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export const About: FC = () => {
  return (
    <div className={cn('About')}>
      <p className={cn('About__header')}>About</p>

      <div className={cn('About__paragraph')}>
        <p className={cn('About__paragraphHeader')}>And then there was Pro</p>
        <p className={cn('About__text')}>
          A transformative triple‑camera system that adds tons of capability
          without complexity. <br /> <br />
          An unprecedented leap in battery life. And a mind‑blowing chip that
          doubles down on machine learning and pushes the boundaries of what a
          smartphone can do. Welcome to the first iPhone powerful enough to be
          called Pro.
        </p>
      </div>

      <div className={cn('About__paragraph')}>
        <p className={cn('About__paragraphHeader')}>Camera</p>
        <p className={cn('About__text')}>
          Meet the first triple‑camera system to combine cutting‑edge technology
          with the legendary simplicity of iPhone. Capture up to four times more
          scene. Get beautiful images in drastically lower light. Shoot the
          highest‑quality video in a smartphone — then edit with the same tools
          you love for photos. You’ve never shot with anything like it.
        </p>
      </div>

      <div className={cn('About__paragraph', 'About__paragraph--last')}>
        <p className={cn('About__paragraphHeader')}>
          Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love
          it.
        </p>
        <p className={cn('About__text')}>
          iPhone 11 Pro lets you capture videos that are beautifully true to
          life, with greater detail and smoother motion. Epic processing power
          means it can shoot 4K video with extended dynamic range and cinematic
          video stabilization — all at 60 fps. You get more creative control,
          too, with four times more scene and powerful new editing tools to play
          with.
        </p>
      </div>
    </div>
  );
};
