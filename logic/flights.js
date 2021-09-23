function Flights() {
    /**
     * @param {number} passengers
     * @param {number} capacity
     * @returns {number}
     */
    function calculateNumberOfFlights(passengers, capacity) {
        if (!Number.isInteger(passengers) || passengers < 0) {
            throw new Error('The number of passengers must be a positive integer value');
        }
        if (!Number.isInteger(capacity) || capacity < 0) {
            throw new Error('The capacity of the flight must be a positive integer value');
        }
        const flights = Math.floor(passengers / capacity);
        if (passengers % capacity) {
            return flights + 1;
        }
        return flights;
    }

    /**
     * @param {number} distanceLimit
     * @param {number[]} distancesArray
     * @returns {string}
     */
    function checkAircraftRevision(distanceLimit, distancesArray) {
        const totalDistance = distancesArray.reduce((p, c) => p + c, 0);
        if (totalDistance > distanceLimit) {
            throw new Error('Total distance exceeds distance limit');
        }
        if (totalDistance >= (distanceLimit * 0.75)) {
            return 'The revision needs to be done within the next month';
        }
        if (totalDistance >= (distanceLimit * 0.5)) {
            return 'The revision needs to be done within the next 2 months';
        }
        return 'The revision needs to be done within the next 3 months';
    }

    return { calculateNumberOfFlights, checkAircraftRevision };
}

module.exports = Flights();