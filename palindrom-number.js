function angkapalindrom(num) {
    for(var i=1;true;i++){
     if(Number(String(num + i).split('').reverse('').join(''))===num + i){
        return num + i
    }
     }
}
    
    

console.log(angkapalindrom(8));
console.log(angkapalindrom(10));
console.log(angkapalindrom(117));
console.log(angkapalindrom(175));
console.log(angkapalindrom(1000));