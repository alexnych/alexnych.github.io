const eat = {
    borshch(count){
        const promise = new Promise(function(resolve, reject){
            const ONE_BORSHCH = 4000;
            if(!count || count>3){
                reject();
            }
            setTimeout(() => {
                console.log('Я съел ${count} борщ  ');
                resolve();
            }, ONE_BORSHCH * count);
            console.log("Начинаю кушать борщ.");
       });
       return promise;
    },
    cake(count){
        const promise = new Promise(function(resolve, reject){ 
            const ONE_CAKE = 2500;
            if(!count || count>7){
            reject();
            }
            setTimeout(() => {
            console.log('Я съел ${count} кекс  ');
            resolve();
            }, ONE_CAKE * count);
            console.log("Начинаю кушать кекс.");
        });
        return promise;
    },
    salatCesar(count){
        const promise = new Promise(function(resolve, reject){
        const ONE_CESAR = 3500;
        if(!count || count>3){
            reject();
            }
        setTimeout(() => {
            console.log('Я съел ${count} салат цезарь  ');
            resolve();
        }, ONE_CESAR * count);
        console.log("Начинаю кушать салат цезарь.");
    });
    }
}