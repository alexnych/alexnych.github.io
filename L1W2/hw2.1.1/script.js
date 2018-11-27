var course=26;
var usd = prompt("Введіть суму доларів (USD to UAH)!");
if (usd>0) {
	alert(+usd*course + " UAH");
} else {
	alert(usd+"Не є числом"); 
}
var uah= prompt("Введіть суму гривень (UAH to USD)!")
alert (+uah*course+ " USD");
