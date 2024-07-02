function togglePassword() {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.src = "img/eyeopen.png"; // 눈 감은 아이콘으로 변경
    } else {
        passwordInput.type = "password";
        togglePassword.src = "img/pwdshowbtn.png"; // 눈 뜬 아이콘으로 변경
    }
}
