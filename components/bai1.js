function validTime(time){
    let h = time.split(':')[0];
    let m = time.split(':')[1];
    
    if(h > 24 && h < 0 && m > 60 && m < 0){
        return false;
    } else return true;
}

console.log(validTime("13:58"));