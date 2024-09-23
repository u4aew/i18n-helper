import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import styles from './textarea.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, id, name, cols = 30, rows = 10, ...props }, ref) => {
    return (
      <label className={styles.box} htmlFor={id}>
        <div className={styles.label}>{label}</div>
        <textarea
          {...props}
          id={id}
          name={name}
          ref={ref}
          className={styles.textarea}
        ></textarea>
      </label>
    );
  }
);
