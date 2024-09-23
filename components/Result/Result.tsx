import React from 'react';
import styles from './result.module.scss';

// @ts-ignore
export const Result = ({ differences, threshold }) => (
  <div className={styles.resultContainer}>
    {Object.keys(differences).length > 0 ? (
      <ul className={styles.ul}>
        {/*@ts-ignore*/}
        {Object.entries(differences).map(([key, { originalLength, translatedLength, lengthDifference }]) => (
          <li
            key={key}
            className={lengthDifference > threshold ? styles.different : ''}
          >
            <strong>{key}:</strong> original: {originalLength} | translate: {translatedLength}
          </li>
        ))}
      </ul>
    ) : (
      <p>No significant differences found.</p>
    )}
  </div>
);
