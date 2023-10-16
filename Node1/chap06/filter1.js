let a1 = "1,2,3,4,5,6,7,8,9,10".split(",");
let a2 = a1.filter((e) => e % 2 == 0);
console.log(a2);

// filter 메소드는 배열의 모든 요소를 순회하면서 인수로 전달된 콜백 함수를 반복 호출하고
// 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// filter 메소드는 원본 배열을 변경하지 않고 새로운 배열을 생성한다.
// 즉 리턴되는 배열은 ["2", "4", "6", "7", "10"] 이다.

// split 메소드
// "1,2,3,4,5,6,7,8,9,10".split(",")
// 문자열을 쪼개서 배열을 만들어 리턴한다.
// ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] 배열이 리턴된다.