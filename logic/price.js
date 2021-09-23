function Prices() {
    /**
     * @param {number} basePrice
     * @param {number} variationPassengerType
     * @param {number} variationFlightType
     * @returns {number}
     */
    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType) {
        if (typeof basePrice === 'number') {
            basePrice = Number.parseInt(basePrice, 10);
        }
        if (typeof variationPassengerType === 'string') {
            variationPassengerType = Number.parseInt(variationPassengerType, 10);
        }
        if (typeof variationFlightType === 'string') {
            variationFlightType = Number.parseInt(variationFlightType, 10);
        }

        let finalPrice = basePrice;
        finalPrice *= 1 + variationPassengerType / 100;
        finalPrice *= 1 + variationFlightType / 100;

        return finalPrice.toFixed(2);
    }

    return { calculateFinalPrice };
}

module.exports = Prices();