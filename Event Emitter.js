class EventEmitter {
    constructor() {
        this.events = {}; // This will hold the event names and their corresponding callback arrays
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);

        // Return the unsubscribe object
        return {
            unsubscribe: () => {
                // Find the index of the callback and remove it from the array
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return []; // If no callbacks are registered for the event, return an empty array
        }
        // Call all the callbacks with the provided arguments and return their results
        return this.events[eventName].map(callback => callback(...args));
    }
}

// Example usage:

// Create a new EventEmitter instance
const emitter = new EventEmitter();

// Subscribe to an event
const sub1 = emitter.subscribe('firstEvent', function cb1() { return 5; });
const sub2 = emitter.subscribe('firstEvent', function cb2() { return 6; });

// Emit the event
console.log(emitter.emit('firstEvent')); // [5, 6]

// Unsubscribe from the event
sub1.unsubscribe();
console.log(emitter.emit('firstEvent')); // [6]
