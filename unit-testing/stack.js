class Queue {
	#store = [];
	#startIndex = 0;
	#count = 0;

	// instance.count
	get count() {
		return this.#count;
	}
	// instance.count = 5
	// instance.count = get(5)
	set count(_) {}
	#increment() {
		this.#count++;
	}
	#decrement() {
		this.#count = Math.max(this.#count - 1, 0);
	}

	push(value) {
		this.#store.push(value);
		this.#increment();
		return value;
	}

	pop() {
		// this.#store.shift()

		// i++ => post-increment
		// ++i => pre-inncrement

		this.#decrement();

		this.#startIndex = Math.min(this.#startIndex, this.#store.length);

		return this.#store[this.#startIndex];
	}
}

module.exports = Queue;
