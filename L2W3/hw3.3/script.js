const eat = {
    borshch(count){
        const ONE_BORSHCH = 4000;
        setTimeout(() => {
            console.log('Я съел ${count} борщ  ');
        }, ONE_BORSHCH * count);
        console.log("Начинаю кушать борщ.");
    },
    cake(count){
        const ONE_CAKE = 2500;
        setTimeout(() => {
            console.log('Я съел ${count} кекс  ');
        }, ONE_CAKE * count);
        console.log("Начинаю кушать кекс.");
    },
    salatCesar(count){
        const ONE_CESAR = 3500;
        setTimeout(() => {
            console.log('Я съел ${count} салат цезарь  ');
        }, ONE_CESAR * count);
        console.log("Начинаю кушать салат цезарь.");
    }
}