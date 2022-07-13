console.log('안녕~'); /*console에 바로 출력해준다.*/
console.log(618);
console.log(5+2);
console.log(5/2);
console.log(5*2); /*위에서 아래로 값을 읽음*/

const a=5, b=2; /*상수인 a,b의 변수를 만든 것*/
console.log(a+b);
console.log(a/b);
console.log(a*b);

let c=5, d=2; /*let c,d의 변수를 만든 것*/ //이것을 보고 생각 해야 하는것은? 아 let변수를 썼으니 여기 어딘가에서 업데이트를 할 수 있겠구나!
console.log(c+d);
console.log(c/d);
console.log(c*d);

//let과 const의 차이점: const(값이 바뀔 수 없음), let(값이 바뀔 수 있음)

const myName = "hayoung"; /*상수인 myName의 변수를 만든 것(str)*/
console.log("hello " + myName);

let myFullName = "hayoungyuk"; /*let myFullName의 변수를 만든 것(str)*/
console.log(myFullName);

myFullName = "yukhayoung"; //여기서는 let을 안써도 된다. 왜냐하면 let은 업데이트 하고싶으면 또 업데이트 할 수 있기 때문이다.
console.log("refresh my name is "+ myFullName); //따라서 그대로 yukhayoung이 나옴.
//하지만 만약에 const한다음 업데이트 하려고하면은 에러가 나온다. if you create a variable by const you can't update anymore.
//그렇다면 둘을 구분하는 이유는?
//왜냐하면 update해야하는 변수도 있고 안해야 되는 변수 즉, 고정 해야 하는 변수도 있기 때문이다.

//디폴트가 뭘까?: const는 기본적으로 사용하고, 만약 변수를 업데이트하고싶다면 let을 쓰면 되는것. 즉 let은 적게 쓰일 것이다.
//cf. var 예전 버전. 어디서나 사용해도 update가능하다는 점을 지니고 있음.

//결론 always == const , sometimes == let , never == var.

//undefined, null, true, false는 모두 문자가 아니라! 데이터 타입 이다.
const amIFat= null; //null means 그 변수에 아무것도 없다는 뜻. false는 값이 있음. 틀리다는 것. 하지만 null은 값자체가 없음을 의미함.
let something; //변수는 존재하지만 정의되지 않은것. 즉, 공간은 있는데 값이 들어가지 않은 것.
console.log(amIFat); //여기는 값이 있음
console.log(something, amIFat); //의미: 값이 없는 것. 값이 주어지지 않은것. //amIFat 값이 주어졌는데 그 값은 비어있음 인 것.
// undefined는 말 그대로 정의 되지 않은 것== 컴퓨터가 인지는 하지만, 값이 없는 것. null은 말 그대로 값이 없는것 == 비어있는것. 정의는 되어져있음.


///////array 만드는 방법
/*
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";
*/

const daysOfWeek = ["mon","tue","wed","thu","fri","sat","sun"]; //array를 사용한 것.
const nonsense = [1,2,"hello",false,null,true,undefined,"hayoung"] //array를 사용한 것. seperated by comma
console.log(daysOfWeek);
console.log(daysOfWeek,nonsense)

//array내에서 thu불러오기
console.log(daysOfWeek[4]);

//array에 요소 추가하기
daysOfWeek.push("weekend"); //요소추가하는 방법 .push사용
console.log(daysOfWeek);

///////객체 object 만드는 법
const player = {
    //write property; :를 작성한다 =를 쓰면 오류난다 ㄱ- 하나를 구분할 때는 ,comma를 사용한다.
    name : "hayoung",
    points: 10,
    fat : false,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);


console.log(player);
player.fat = true; //데이터 값이 바뀐다! 하지만 객체들 하나하나 는 바뀔 수 있다는 사실. const는 여전히 바꾸지 못하지만 하나의 객체의 데이터 값은 바꿀 수 있다는 것이다.
console.log(player);

console.log(player);
player.lastName = "potato"; //새로운 데이터 값이 생성된다!
player.points = 20; //데이터 값이 바뀐다!
player.points = player.points+15; //데이터 값을 더해서 갱신한다!
console.log(player);

