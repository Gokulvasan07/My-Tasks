let add = document.getElementById("add");
add.addEventListener("click", function(){
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let sum = Number(input1) + Number(input2);
  let head1 = document.getElementById("head1");
  let div = document.getElementById("one-div");
  div.style.position = "absolute";
  div.style.zIndex = "-1";
  let div2 = document.getElementById("second-div");
  div2.style.display = "block";
  head1.textContent = `This is Your Addition ${sum}`;
});
let sub = document.getElementById("sub");
sub.addEventListener("click", function(){
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let sum = Number(input1) - Number(input2);
  let div = document.getElementById("one-div");
  div.style.position = "absolute";
  div.style.zIndex = "-1";
  let div2 = document.getElementById("second-div");
  div2.style.display = "block";
  let head1 = document.getElementById("sub-head1");
  head1.textContent = `This is Your Subtraction ${sum}`;
});

let division=document.getElementById("divide");
divide.addEventListener("click",function(){
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let divide=Number(input1) / Number(input2);
  let div = document.getElementById("one-div");
  div.style.position = "absolute";
  div.style.zIndex = "-1";
  let div2 = document.getElementById("second-div");
  div2.style.display = "block";
  let head1 = document.getElementById("sub-head2");
  head1.textContent = `This is Your division ${divide}`;
})


let resett = document.getElementById("resett");
resett.addEventListener("click", function(){
  let div2 = document.getElementById("second-div");
  div2.style.display = "none";
});