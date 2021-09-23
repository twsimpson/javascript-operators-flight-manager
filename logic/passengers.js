function Passengers() {
    /**
     * @param {number} capacity
     * @param {number[]} passengersArray
     * @returns {number}
     */
    function checkFlightCapacity(capacity, passengersArray) {
        const totalPassengers = passengersArray.reduce((p, c) => p + c, 0);
        if (totalPassengers > capacity) {
            throw new Error('Total count of passengers exceeds capacity');
        }
        return totalPassengers;
    }

    /**
     * @param {number} vipPassengers
     * @param {number} regularPassengers
     * @param {number} flights;
     * @param {number} businessSeatsPerFlight
     * @param {number} economySeatsPerFlight
     * @returns {{
     *  vipPassengersWithBusinessSeats: number,
     *  vipPassengersWithEconomySeats: number,
     *  regularPassengersWithBusinessSeats: number,
     *  regularPassengersWithEconomySeats: number
     * }}
     */
    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, flights, businessSeatsPerFlight, economySeatsPerFlight) {
        let vipPassengersWithBusinessSeats = 0;
        let vipPassengersWithEconomySeats = 0;
        let regularPassengersWithBusinessSeats = 0;
        let regularPassengersWithEconomySeats = 0;

        let totalBusinessSeets = businessSeatsPerFlight * flights;
        let totalEconomySeets = economySeatsPerFlight * flights;

        while (vipPassengers > 0 && totalBusinessSeets > 0) {
            ++vipPassengersWithBusinessSeats;
            --vipPassengers;
            --totalBusinessSeets;
        }

        while (vipPassengers > 0 && totalEconomySeets > 0) {
            ++vipPassengersWithEconomySeats;
            --vipPassengers;
            --totalEconomySeets;
        }

        while (regularPassengers > 0 && totalBusinessSeets > 0) {
            ++regularPassengersWithBusinessSeats;
            --regularPassengers;
            --totalBusinessSeets;
        }

        while (regularPassengers > 0 && totalEconomySeets > 0) {
            ++regularPassengersWithEconomySeats;
            --regularPassengers;
            --totalEconomySeets;
        }

        return {
            vipPassengersWithBusinessSeats,
            vipPassengersWithEconomySeats,
            regularPassengersWithBusinessSeats,
            regularPassengersWithEconomySeats
        };
    }

    return { checkFlightCapacity, distributeAllSeatsToAllPassengers }
}

module.exports = Passengers();