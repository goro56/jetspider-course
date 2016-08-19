function f(x){
  p(x++);
  p(x);
  
  var y = 100;
  p(y++);
  p(y);
}

var x = 1;
p(x++);
p(x);

f(10)
