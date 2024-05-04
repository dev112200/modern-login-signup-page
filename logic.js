let sign = document.getElementById("sign-box");
let logn = document.getElementById("log-box");
function loginshow(){
    logn.style.zIndex = 2;
    logn.style.opacity=1;
    logn.style.position="relative";
    sign.style.opacity=0;
    sign.style.zIndex = 1;
    sign.style.position="absolute";
}
function signupshow(){
    sign.style.position="relative";
    sign.style.zIndex = 2;
    sign.style.opacity=1;
    logn.style.position="absolute";
    logn.style.opacity=0;
    logn.style.zIndex = 1;
}

