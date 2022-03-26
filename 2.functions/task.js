// Задание 1

"use strict"

function getArrayParams(arr) {
  let min, max, sum, avg;

  min = Infinity;
	max = -Infinity;
	sum = 0;
	avg = 0;

	for (let i = 0; i < arr.length; i++) {

		if (max < arr[i]) {
			max = arr[i];
		};
		if (min > arr[i]) {
			min = arr[i];
		};
		sum += arr[i];
	}

	avg = sum / arr.length;
	avg = Number(avg.toFixed(2));

  return { min, max, avg };
};

// Задание 2

function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let result;

  for (let i = 0; i < arrOfArr.length; i++) {
    result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    }
  } return max;
}

// Задание 3

function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let difference;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } if (max < arr[i]) {
      max = arr[i];
    }

  } difference = max - min;

  return difference;
}
