import Image from 'next/image';
import { ButtonProps } from './types';

const Button = ({
  leftIcon,
  leftIconWidth,
  leftIconHeight,
  textClassName,
  className,
  name,
  rightIcon,
  rightIconWidth,
  rightIconHeight,
}: ButtonProps) => {
  return (
    <button className={`flex items-center gap-x-3 bg-balablue rounded px-4 py-2 ${className}`}>
      {leftIcon ? (
        <Image
          src={leftIcon}
          width={leftIconWidth || '15'}
          height={leftIconHeight || '15'}
          alt={leftIcon}
        />
      ) : null}
      <span className={`font-medium text-white ${textClassName}`}>{name}</span>
      {rightIcon ? (
        <Image
          src={rightIcon}
          width={rightIconWidth || '15'}
          height={rightIconHeight || '15'}
          alt={rightIcon}
        />
      ) : null}
    </button>
  );
};

export default Button;
