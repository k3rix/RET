import { memo, SVGProps } from 'react';

const Rectangle1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 301 208' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 30C0 13.4315 13.4315 0 30 0H271C287.569 0 301 13.4315 301 30V178C301 194.569 287.569 208 271 208H30C13.4315 208 0 194.569 0 178V30Z'
      fill='#AFAFB3'
    />
  </svg>
);
const Memo = memo(Rectangle1Icon);
export { Memo as Rectangle1Icon };
