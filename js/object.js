function MyFunc(){
  this.x = 1;
}
var test = MyFunc();
test.x = 2;
p(test.x);
