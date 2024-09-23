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
            className={styles.li}
          >
            <div className={lengthDifference > threshold ? styles.different : ''}>
              <div className={styles.item}>
                <div className={styles.side}>
                  <strong>{key}:</strong>
                </div>
                <div className={styles.main}>
                  Original: {originalLength} | Translate: {translatedLength}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p>No significant differences found.</p>
    )}
  </div>
);
