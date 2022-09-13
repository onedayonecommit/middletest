// 이름 : 김경환
// Git 주소 : https://github.com/onedayonecommit
// 서술형
// 서술형은 각 문제 아래에 서술할 것.
// 동기와 비동기 처리에 대하여 설명하라.
// 싱글 스레드와 멀티 스레드에 대하여 설명하라.
// 쿠키와 세션, 로컬저장소의 차이점에 대하여 설명하라.
// 콜백지옥이 무엇이고 이것을 해결하기 위한 방안은 무엇인지 설명하라.
// Node.js 이벤트 큐 동작원리에 대하여 설명하라.
// GET, POST 방식에 대하여 설명하라.
// 자바스크립트의 배열이 실제 자료구조 배열이 아닌데 그 이유는 무엇인가?
// http와 https의 차이점은 무엇인가?
// 브라우저 렌더링 과정에 대하여 설명하라.
// 호이스팅이 무엇인지 서술하라.


/**소수인지 찾는 함수 */
const sosu = (a) => {
    for (let i = 2; i < a; i++) {
        if (a % i == 0) return false
    } return true
}

/**소인수 분해 함수 */
const soinsu = (a) => {
    let arr = [];
    for (let i = 2; i <= a; i++) {
        if (a % i == 0) {
            if (arr.indexOf(i) == -1) arr.push(i) // if조건문 지우면 [2,3,3,3,11] 출력
            a = a / i
            i = 1
        }
        if (a == 1) return arr
    }
}

/**10진법 제곱 구하기 함수 */
const tenjin = (a) => {
    var b = 0;
    for (let i = 2; 2 ** i <= a; i++) {
        b = i
    }
    return b
}

/**10진법 2진법 변환함수 */
const twojin = (aa) => {
    var final = "";
    aa == 1025
    for (let i = twojin(aa); i >= 0; i--) {
        if (aa - (2 ** i) >= 0) {
            final += "1"
            aa = aa - 2 ** i
        }
        else {
            final += "0"
        }
    }
    return final
}
// console.log(twojin(993))

/**거꾸로 읽어도 같은 문자열 */
const reverseString = (a) => {
    var b = ""
    for (let i = a.length; i > 0; i--) {
        b += a[i - 1]
    }
    if (b == a) return true
    else return false
}
// console.log(reverseString("apppa"))

const gongtong = (arr) => {
    var a = [];
    a = arr
    for (let i = 1; i < arr.length; i++) {
        for (let ii = 0; ii < a[0].length; i++) {
            if (a[i].indexOf(a[0][ii]) != -1) {
                console.log(a[i].indexOf(a[0][ii]))
            }
        }
    }
}
// gongtong([[32, 12], [12, 22], [32, 34]])

var aaaa = [[1, 2], [0], [0]]
var i1 = 1;
console.log(aaaa[i1].indexOf(aaaa[0][i1]))