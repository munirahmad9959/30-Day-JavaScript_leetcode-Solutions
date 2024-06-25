class EventEmitter {
    constructor() {
        this.events = {}; 
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

        return {
            unsubscribe: () => {
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
            return []; 
        }
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
