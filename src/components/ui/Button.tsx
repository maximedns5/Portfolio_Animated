import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type SharedProps = {
  children: ReactNode;
  accent?: boolean;
};

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

function isAnchorProps(props: ButtonProps): props is AnchorProps {
  return 'href' in props && typeof props.href === 'string';
}

export default function Button(props: ButtonProps) {
  const className = `${styles.button} ${props.accent ? styles.accent : ''} ${
    props.className ?? ''
  }`;

  if (isAnchorProps(props)) {
    const { children, accent: _accent, className: _className, ...anchorProps } = props;
    return (
      <a {...anchorProps} className={className}>
        {children}
      </a>
    );
  }

  const { children, accent: _accent, className: _className, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={className}>
      {children}
    </button>
  );
}
