var corporateCredentialNumber= [20, 31, 35, 67, 90, 84, 88, 10, 1, 0];
var usernameMatchesNumber = [ 200, 100, 80, 10, 500, 897, 637, 19, 849, 268, 783];
var nosOfTimeExposed = [2, 5, 7, 8, 10, 26, 36, 19, 82, 19, 0, 3];
var nosOfAttack = [2, 5, 7, 8, 10, 26, 36, 19, 82, 19, 0, 61];
var attacksPrevented = [1,4,8,2,7,9,3,10,19,50,20,11,23,45];

var corporateCredential = corporateCredentialNumber[Math.floor(Math.random()*corporateCredentialNumber.length)];
var usernameMatches = usernameMatchesNumber[Math.floor(Math.random()*usernameMatchesNumber.length)];
var noOfTimeExposed = nosOfTimeExposed[Math.floor(Math.random()*nosOfTimeExposed.length)];
var noOfAttack = nosOfAttack[Math.floor(Math.random()*nosOfAttack.length)];
var attackPrevented = attacksPrevented[Math.floor(Math.random()*attacksPrevented.length)];



const Update = () => { 
    document.getElementById("corporateExposed").innerHTML = corporateCredential;
    document.getElementById("userNameMatches").innerHTML = usernameMatches;
    document.getElementById("numberOfTimeExposed").innerHTML = noOfTimeExposed;
    document.getElementById("numberOfAttack").innerHTML = noOfAttack;
    document.getElementById("numbers attackPrevented").innerHTML = attackPrevented;
}


    



export default Update;







    




//export default Update;