# Code a Digital Clock in React that shows current time of the machine with hours, minutes and seconds showing in different colour

### DigitalClock.tsx

```tsx
import React from "react";
import styles from './DigitalClock.module.css';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(currentTime);

  return (
    <div className={styles.clock}>
      <span className={styles.hours}>{hours} : </span>
      <span className={styles.minutes}>{minutes} : </span>
      <span className={styles.seconds}>{seconds}</span>
    </div>
  );
};

```

### DigitalClock.module.css

```css
// DigitalClock.module.css

.clock {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 100vh;
}

.hours {
  color: red;
}

.minutes {
  color: green;
}

.seconds {
  color: blue;
}

```
