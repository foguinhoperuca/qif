module.exports = (function () {	
	
	'use strict';

	function writeField(code, value) {
		var result = '';
		if (value) {
			result += code;
			result += value;
			result += '\r\n';
		}
		return result;
	}

	var write = function (transactions) {
		var result;
		if (transactions && transactions.cash) {
			result = '!Type:Cash\r\n';
			for (var i = 0; i < transactions.cash.length; i++) {
				var transaction = transactions.cash[i];
				result += writeField('D', transaction.date);
				result += writeField('T', transaction.amount);
				result += writeField('P', transaction.payee);
				result += writeField('L', transaction.category);
				result += writeField('M', transaction.memo);
				result += '^\r\n';
			};
		}
		return result;
	};

	var writeToFile = function (transactions, file) {
	};

	return {
		write: write,
		writeToFile: writeToFile
	};

})();