import { memo, SVGProps } from 'react';

const ButtonBackspaceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 68 68' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={34} cy={34} r={34} fill='#404040' />
  </svg>
);
const Memo = memo(ButtonBackspaceIcon);
export { Memo as ButtonBackspaceIcon };
