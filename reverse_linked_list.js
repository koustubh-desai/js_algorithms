function immutableReverse(obj,job) {
    var k = {};
    k.val = obj.val;
    k.next = job;
    if(!obj.next) {return k}
    return immutableReverse(obj.next,k);
}
function print(obj){
    console.log(obj.val);
    if(obj.next && obj.next.val) print(obj.next);
}
var list = {
  val: 23,
  next: {
    val:  24,
    next: {
      val: 30,
      next: {
        val: 50,
        next: {
          val: -1
        }
      }
    }
  }
};
print(list);
list = immutableReverse(list,{});
console.log("and then");
print(list);