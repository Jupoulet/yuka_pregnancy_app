import { CSSProperties, FC } from "react";
import classnames from 'classnames';
import { getRandomArbitrary } from "../../models/utils";

const listedTagColors: TagProps['color'][] = ['slate', 'red', 'orange', 'yellow', 'lime', 'green', 'blue', 'pink'];

interface TagProps {
  color: 'slate' | 'red' | 'orange' | 'yellow' | 'lime' | 'green' | 'blue' | 'pink';
  className?: string;
  style?: CSSProperties;
}

export const getRandomTagColor = (): TagProps['color'] => {
  const randomIndex = getRandomArbitrary(0, listedTagColors.length - 1);
  console.log('randomindex', randomIndex);
  return listedTagColors[randomIndex];
}

export const Tag: FC<TagProps> = ({ children, color, className, style }) => {
  console.log('color', color);
  return (
    <span
      style={style}
      className={classnames(
        'inline-block',
        'p-2',
        'rounded',
        'text-sm',
        'text-white',
        { 'bg-slate-500': color === 'slate'},
        { 'bg-red-500': color === 'red'},
        { 'bg-orange-500': color === 'orange'},
        { 'bg-amber-500': color === 'yellow'},
        { 'bg-lime-500': color === 'lime'},
        { 'bg-green-500': color === 'green'},
        { 'bg-blue-500': color === 'blue'},
        { 'bg-pink-500': color === 'pink'},
        className
      )}
    >
      {children}
    </span>
  )
}