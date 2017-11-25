/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	if (typeof hours !== "number" || typeof minutes !== "number" || typeof interval !== "number") {
		return NaN;
	}
	if (hours % 1 != 0 || minutes % 1 != 0 || interval % 1 != 0) {
		return false;
	}
	// if (isNaN(hours) || !(typeof hours === 'number' && hours % 1 === 0)) {
 //      retursn NaN;
 //    }
 //     if (isNaN(minutes) || !(typeof minutes === 'number' && minutes % 1 === 0)) {
 //      return NaN;
 //    }
 //     if (isNaN(interval) || !(typeof interval === 'number' && interval % 1 === 0)) {
 //      return NaN;
 //    }
	if (hours < 0 || hours > 23) {
		return false;
	}
	if (minutes < 0 || minutes > 59) {
		return false;
	}
	if (interval < 0) {
		return false;
	}
	else {
		return Math.floor(hours, minutes);
	}