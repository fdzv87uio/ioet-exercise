import React from 'react';
import { getHoursPerDay, getPayPerDay } from './utils/counters';
/*
 * TEST 1: Hour per Day counter test
 */
test('Check if hour Counter returns good value', () => {
  const data = ['11:00', '13:00'];
  const res = getHoursPerDay(data);
  expect(res).toBe(2);
});
/*
 *TEST 2:Pay per Day counter test
 */
test('Check if pay per day counter works', () => {
  const hours = ['5:00', '7:00'];
  const day = 'MO';
  const res = getPayPerDay(day, hours);
  expect(res).toBe(50);
});
