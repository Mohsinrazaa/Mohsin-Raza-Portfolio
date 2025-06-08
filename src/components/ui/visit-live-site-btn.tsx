import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ProjectsCardViewLiveSiteButton } from '@/lib/constants';

export interface ArrowUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUpIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const pathVariants: Variants = {
  normal: { d: 'm5 12 7-7 7 7', translateY: 0 },
  animate: {
    d: 'm5 12 7-7 7 7',
    translateY: [0, 3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const secondPathVariants: Variants = {
  normal: { d: 'M12 19V5' },
  animate: {
    d: ['M12 19V5', 'M12 19V10', 'M12 19V5'],
    transition: {
      duration: 0.4,
    },
  },
};

const VisitLiveSiteBtn = forwardRef<ArrowUpIconHandle, ArrowUpIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 22, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start('animate'),
        stopAnimation: () => controls.start('normal'),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start('animate');
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start('normal');
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className, "flex flex-row gap-0.5 items-center text-sm font-myMainFont text-myPalette1 font-semibold px-4 py-2 bg-myPalette9 border-2 border-myPalette9 rounded-full")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <p>{ProjectsCardViewLiveSiteButton}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="rotate(45)"
        >
          <motion.path
            d="m5 12 7-7 7 7"
            variants={pathVariants}
            animate={controls}
          />
          <motion.path
            d="M12 19V5"
            variants={secondPathVariants}
            animate={controls}
          />
        </svg>
      </div>
    );
  }
);

VisitLiveSiteBtn.displayName = 'ArrowUpIcon';

export { VisitLiveSiteBtn };
