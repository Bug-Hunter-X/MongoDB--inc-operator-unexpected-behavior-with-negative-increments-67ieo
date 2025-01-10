```javascript
// Correct usage of $inc operator with a check to prevent decrementing below zero
db.collection('counters').updateOne({ _id: 'myCounter', sequence: { $gt: 0 } }, { $inc: { sequence: -1 } });
```