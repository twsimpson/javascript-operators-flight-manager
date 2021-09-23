function Util() {
    /**
     * @param {{
     *  vipPassengersWithBusinessSeats: number,
     *  vipPassengersWithEconomySeats: number,
     *  regularPassengersWithBusinessSeats: number,
     *  regularPassengersWithEconomySeats: number
     * }} distribution
     * @returns {number}
     */
    function calculateTotalDistributedPassengers(distribution) {
        return distribution.vipPassengersWithBusinessSeats + distribution.vipPassengersWithEconomySeats + distribution.regularPassengersWithBusinessSeats + distribution.regularPassengersWithEconomySeats;
    }

    /**
     * @param {number[]} passengers
     */
    function calculateTotalNumberOfPassengers(passengers) {
        return passengers.reduce((p, c) => p + c, 0);
    }

    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers };
}

module.exports = Util();