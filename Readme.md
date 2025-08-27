 Q-1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 Ans-1: getElementById: একটাই element আনে যেটার id মিলে।

getElementsByClassName: সব element আনে যেগুলোর class মিলে, returns live HTMLCollection।

querySelector / querySelectorAll: CSS selector দিয়ে প্রথম বা সব matching element আনে; 

Q-2 How do you create and insert a new element into the DOM?

Ans-2: I can create and insert a new element in the DOM using document.createElement and methods like appendChild or insertBefore.

Q-03 What is Event Bubbling and how does it work?

Ans-3: Event Bubbling হলো কোনো element এ event ঘটলে তা parent elements এর দিকে ধাপে ধাপে ছড়িয়ে যাওয়া।

Q-4 : What is Event Delegation in JavaScript? Why is it useful?

Ans-04: Event Delegation হলো একটা parent element এ event listener বসানো এবং child elements এর events handle করা।

অনেক child element থাকলে প্রতিটায় listener না বসিয়ে একটি parent এ বসিয়ে efficiency বাড়ায়।

নতুন dynamically added elements এর জন্যও কাজ করে।

Q-5: What is the difference between preventDefault() and stopPropagation() methods?

Ans-5: preventDefault() → stops the browser’s default action for an event form submit

stopPropagation() → stops the event from bubbling up to parent elements.