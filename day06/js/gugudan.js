function printGugu() {

    let danTag = document.getElementById("dan");
    let dan = danTag.value.trim();

    let danPatt = /^[2-9]{1}$/
    if (dan === '' || !danPatt.test(dan)) {
        alert("2~9사이 값 입력");
        danTag.focus();
        return;
    }

    let disp = document.getElementById("disp");

    //구구단 생성
    let str = '';
    for (let i = 1; i <= 9; i++) {
        str = str + dan + 'x' + i + '=' + dan * i + '<br/>'
    }

    console.log(str)

    disp.innerHTML = str;

}

let b_show = true;
function show() {
    b_show = !b_show;

    let btn = document.getElementById("btn_show");
    btn.value = b_show ? "숨기기" : "보이기";

    // #disp{ display : none; }
    let disp = document.getElementById("disp");
    disp.style.display = b_show ? 'block' : 'none';
}

