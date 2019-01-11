function AutoShow(mark = "Toyota", volume = 2.5, price = 30000, year = 2016){
    const currentYear = 2019;
    this.mark = mark;
    this.price = price;
    this.volume = volume;
    this.year = year;
    this.getTax = function(){
        return (price * 0.2) + (0.01 * volume * price);
    }
    this.getDiscount = function(){
        return (currentYear - year) * 0.1 * price;
    }
}