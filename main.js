str.addEventListener('input', checkInput);
str.addEventListener('paste', checkInput);


function checkInput() {
	var string = str.value;
	var i = 0;
	var resultString = '';

	for (i=0; i < string.length; i++){
		resultString += translate(string[i]);
	};

	result.innerHTML = resultString;
	str.style.height = 'auto';
	str.style.height = str.scrollHeight +'px';
};

function translate(char) {
	char = char.replace('<', '&lt;');
	char = char.replace('>', '&gt;');

	if (char.length === 1) {
		if (/[а-яА-Я]/.test(char)){
			char = '<ru>' +char+ '</ru>';
		}
		else if (/[a-zA-Z]/.test(char)) {
			char = '<neru>' +char+ '</neru>';
		};
	};

	return char;
};
