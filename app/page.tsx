'use client'

import React, { useState, useEffect } from 'react';
import { TextArea } from '@/components/TextArea';
import { Result } from '@/components/Result';
import styles from './Home.module.css';

const original = {
  "welcome": "Welcome",
  "login": "Login",
  "logout": "Logout",
  "settings": "Settings",
  "profile": "Profile",
  "help": "Help"
}

const translate = {
  "welcome": "Hoşgeldiniz",
  "login": "Giriş Yapınız",
  "logout": "Çıkış Yapınız",
  "settings": "Ayarlarınızı Yapılandırın",
  "profile": "Profiliniz",
  "help": "Yardım Alınız"
}

const Home = () => {
  const [originalJson, setOriginalJson] = useState(JSON.stringify(original, null, 2));
  const [translatedJson, setTranslatedJson] = useState(JSON.stringify(translate, null, 2));
  const [differences, setDifferences] = useState({});
  const [threshold, setThreshold] = useState(5);

  const calculateDifferences = (originalJson: string, translatedJson: string) => {
    try {
      const original = JSON.parse(originalJson);
      const translated = JSON.parse(translatedJson);
      const diff = {};

      for (const key in original) {
        if (translated[key]) {
          const originalLength = original[key].length;
          const translatedLength = translated[key].length;
          const lengthDifference = Math.abs(originalLength - translatedLength);

          if (lengthDifference > threshold) {
            // @ts-ignore
            diff[key] = {
              originalLength,
              translatedLength,
              lengthDifference
            };
          }
        }
      }

      setDifferences(diff);
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  };

  useEffect(() => {
    calculateDifferences(originalJson, translatedJson);
  }, [originalJson, translatedJson, threshold]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Localization key length checker</h1>
        <div className={styles.textareas}>
          <div className={styles.item}>
            <TextArea
              label="Original JSON"
              value={originalJson}
              onChange={(e) => setOriginalJson(e.target.value)}
              placeholder="Enter original JSON here"
            />
          </div>
          <div className={styles.item}>
            <TextArea
              label="Translated JSON"
              value={translatedJson}
              onChange={(e) => setTranslatedJson(e.target.value)}
              placeholder="Enter translated JSON here"
            />
          </div>
        </div>
        <div className={styles.threshold}>
          <label htmlFor="threshold">Character Difference Threshold: </label>
          <input
            id="threshold"
            value={threshold}
            className={styles.input}
            onChange={(e) => setThreshold(Number(e.target.value) || 0)}
          />
        </div>
        <div className={styles.results}>
          <h2 className={styles.subtitle}>Significant Differences</h2>
          <Result differences={differences} threshold={threshold} />
        </div>
      </div>
    </div>
  );
};

export default Home;
