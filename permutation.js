/*
1. Write a function to output the 
*/
var str = "abcd";

// Array to start
var permutations = [];


String.prototype.rem = function(i){
    //console.log(this.charAt(i));
    var k = this.split('');
    Array.prototype.splice.call(k,i,1);
    return k.join('');
}
//function for recursion
function recurse(dest,src){
    if(!src) {permutations.push(dest);return}
    for(var i=0; i<src.length;i++){
        recurse(dest+src.charAt(i),src.rem(i));
    }
}
//Starting point
recurse('','abcd');


console.log(" No of permutations are ",permutations.length," and they are \n",permutations);
