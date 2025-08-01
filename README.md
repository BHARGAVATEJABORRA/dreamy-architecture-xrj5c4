# ramp-hidden-url-flag-fetcher
Created with CodeSandbox
# Ramp CTF Challenge – React Typewriter Flag App

This project is a solution to the Ramp CTF (Capture The Flag) challenge. The goal was to extract a hidden flag from a DOM structure, retrieve it using a React frontend, and display it with a simulated typewriter animation — one character every 500ms.

## 🚀 Challenge Overview

### Objective:
1. Visit a hidden challenge page and reconstruct a URL based on specific HTML DOM patterns.
2. Fetch the flag from that URL in a React application.
3. Display the flag with the following rules:
   - Show a "Loading..." message while fetching.
   - Reveal each character one-by-one every 500ms.
   - Wrap each character inside a `<li>` element.
   - Animation should only run once.

### Bonus:
- Provide a script that extracted the flag URL from the challenge DOM.

---

## 🛠️ Technologies Used

- React (via CodeSandbox)
- JavaScript (ES6+)
- Native browser APIs (no external libraries)
- GitHub for version control

---

## 🧩 Bonus: DOM Extraction Script

```js
// Paste into the browser console on the challenge page to extract the flag URL
const chars = [];
document.querySelectorAll('section[data-id^="92"]').forEach(section => {
  const article = section.querySelector('article[data-class$="45"]');
  if (!article) return;
  const div = article.querySelector('div[data-tag*="78"]');
  if (!div) return;
  const b = div.querySelector('b.ref');
  if (b && b.hasAttribute('value')) {
    chars.push(b.getAttribute('value'));
  }
});
console.log(chars.join(''));
