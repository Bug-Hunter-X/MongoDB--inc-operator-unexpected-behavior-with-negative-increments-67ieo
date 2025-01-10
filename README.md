# MongoDB $inc Operator Unexpected Behavior with Negative Increments

This repository demonstrates an uncommon error related to the MongoDB `$inc` operator when attempting to decrement a counter below zero.

## Problem
The `$inc` operator, typically used for atomically incrementing or decrementing fields, can lead to unexpected behavior if not handled correctly.  This example shows how decrementing a counter below its minimum (usually 0) can cause issues.

## Solution
The provided solution implements a check to prevent decrementing below zero; if the counter is already at zero, no change is made.  Alternative solutions might include using a different approach for counter management, such as a dedicated counter collection with appropriate error handling and constraint checks.