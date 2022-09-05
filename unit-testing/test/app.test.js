const sum = require('../app');
const Queue = require('../stack');

test('test sum function', () => {
	const data = sum(1, 2);

	expect(data).toEqual(3);
});

test('queue implementation', () => {
	const queue = new Queue();

	// [1, 2, 3, 4, 5, 6] 6
	// [x, 2, 3, 4, 5, 6]
	// [2, 3, 4, 5, 6]
	// FIFO

	expect(queue.count).toEqual(0);

	queue.push(1);
	expect(queue.count).toEqual(1);

	expect(queue.push(2)).toEqual(2);
	expect(queue.count).toEqual(2);

	expect(queue.pop()).toEqual(1);
	expect(queue.count).toEqual(1);

	expect(queue.pop()).toEqual(2);
	expect(queue.count).toEqual(0);

	expect(queue.pop()).toEqual(undefined);
	expect(queue.pop()).toEqual(undefined);
	expect(queue.pop()).toEqual(undefined);
	expect(queue.pop()).toEqual(undefined);
	expect(queue.count).toEqual(0);

	expect(queue.push(2)).toEqual(2);
	expect(queue.count).toEqual(1);

	expect(queue.push(2)).toEqual(2);
	expect(queue.count).toEqual(2);

	expect(queue.pop()).toEqual(2);
	expect(queue.count).toEqual(1);

	queue.pop();
	// expect(queue.pop()).toEqual(2);
	expect(queue.count).toEqual(0);
});
