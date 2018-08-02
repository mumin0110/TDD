function Length() {}
Length.prototype.run = function(firstNum, secondNum, firstCompany, secondCompany) {
	if (firstCompany == 'cm') {
		firstNumReplace = firstNum
	}
	if (secondCompany == 'cm') {
		secondNumReplace = secondNum
	}
	if (firstCompany == 'dm') {
		firstNumReplace = firstNum * 10
	}
	if (secondCompany == 'dm') {
		secondNumReplace = secondNum *10
	}
	if (firstCompany == 'm') {
		firstNumReplace = firstNum * 100
	}
	if (secondCompany == 'm') {
		secondNumReplace = secondNum *100
	}
	if (firstNumReplace > secondNumReplace) {
		return (firstNum + firstCompany).toString(); 
	}
	if (firstNumReplace < secondNumReplace) {
		return (secondNum + secondCompany).toString(); 
	}
	if (firstNumReplace == secondNumReplace) {
		return 'same'; 
	}
};