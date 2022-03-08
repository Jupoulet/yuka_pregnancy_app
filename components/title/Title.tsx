import { FC } from "react";
import classnames from 'classnames';

export interface TitleProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  size?: 'small' | 'regular' | 'big';
  className?: string;
}

export const Title: FC<TitleProps> = ({ children, as = 'h1' , size = 'regular', className }) => {
  const CustomTag = as;
  return (
    <CustomTag
      className={classnames(
        { 'text-3xl': size === 'regular' },
        { 'text-4xl': size === 'big' },
        { 'text-xl': size === 'small' },
        'font-bold',
        'text-black',
        className
      )}
    >{children}</CustomTag>
  )
}