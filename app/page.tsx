'use client'

import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [originalJson, setOriginalJson] = useState('');
  const [translatedJson, setTranslatedJson] = useState('');
  const [differences, setDifferences] = useState({});

  const calculateDifferences = () => {
    try {
      const original = JSON.parse(originalJson);
      const translated = JSON.parse(translatedJson);
      const diff = {};

      for (const key in original) {
        if (translated[key]) {
          const originalLength = original[key].length;
          const translatedLength = translated[key].length;
          const lengthDifference = Math.abs(originalLength - translatedLength);
          const percentageDifference = (lengthDifference / originalLength) * 100;

          if (percentageDifference > 20) { // Threshold for significant difference
            //@ts-ignore
            diff[key] = percentageDifference.toFixed(2) + '%';
          }
        }
      }

      setDifferences(diff);
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Localization Length Checker</h1>
      <div className={styles.textareas}>
        <div>
          <h2>Original JSON</h2>
          <textarea
            className={'textarea'}
            value={originalJson}
            onChange={(e) => setOriginalJson(e.target.value)}
            placeholder="Enter original JSON here"
          />
        </div>
        <div>
          <h2>Translated JSON</h2>
          <textarea
            className={'textarea'}
            value={translatedJson}
            onChange={(e) => setTranslatedJson(e.target.value)}
            placeholder="Enter translated JSON here"
          />
        </div>
      </div>
      <button className="button" onClick={calculateDifferences}>Check Differences</button>
      <div className={styles.results}>
        <h2>Significant Differences</h2>
        {Object.keys(differences).length > 0 ? (
          <ul className={'ul'}>
            {Object.entries(differences).map(([key, diff]) => (
              <li className={'li'} key={key}>
                {/*@ts-ignore*/}
                <strong>{key}:</strong> {diff} difference
              </li>
            ))}
          </ul>
        ) : (
          <p>No significant differences found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
