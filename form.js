/*
 * 檢查 email 格式的函數
 * @param string email - 要檢查的 email
 * @returns boolean - 有效返回true，無效則false
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 元素切換
function toggleElement(targetElement, shouldShow) {
    // 如果應該顯示，則顯示；否則，隱藏
    targetElement.style.display = shouldShow ? 'block' : 'none';
}

const email = document.getElementById('email');
const submit = document.getElementById('submit');
const banIcon = document.querySelector('.fa-ban');
const emailHelp = document.getElementById('emailHelp');
const emailinvalid = document.getElementById('emailinvalid');
const userIcon = document.getElementById('userIcon');
const keyIcon = document.getElementById('keyIcon');
const password = document.getElementById('password');
const password_eye = document.getElementById('password_eye');

let hasError = false; // 用於追蹤email是否有錯誤

submit.addEventListener('click', () => {
    // 檢查 email 格式
    if (!isValidEmail(email.value)) {
        // 顯示錯誤元素
        banIcon.classList.remove('hidden');
        email.classList.add('notvalid');
        toggleElement(emailHelp, false); // 隱藏 emailHelp
        toggleElement(emailinvalid, true); // 顯示 emailinvalid
        hasError = true; // 設置錯誤標誌
    } else {
        // 如果之前有錯誤，則恢復正常狀態
        if (hasError) {
            banIcon.classList.add('hidden');
            email.classList.remove('notvalid');
            toggleElement(emailHelp, true); // 顯示 emailHelp
            toggleElement(emailinvalid, false); // 隱藏 emailinvalid
            hasError = false; // 重置錯誤標誌
        }
    }
    //檢查密碼是否為空
    if (!password.value) {
        passwordinvalid.style.display = 'block';
        password.classList.add('notvalid');
    } else {
        passwordinvalid.style.display = 'none';
        password.classList.remove('notvalid');
    }
});

// 監聽 email 框的 focus 事件
email.addEventListener('focus', () => {
    // 隱藏 user icon
    userIcon.classList.add('hidden');
});

// 監聽 email 框的 blur 事件
email.addEventListener('blur', () => {
    // 如果 input 框內沒有值，顯示 user icon；否則，隱藏
    if (email.value === '') {
        userIcon.classList.remove('hidden');
    } else {
        userIcon.classList.add('hidden');
    }
});

// 監聽 password 框的 focus 事件
password.addEventListener('focus', () => {
    // 隱藏 user icon
    keyIcon.classList.add('hidden');
});

// 監聽 password 框的 blur 事件
password.addEventListener('blur', () => {
    // 如果 input 框內沒有值，顯示 user icon；否則，隱藏
    if (password.value === '') {
        keyIcon.classList.remove('hidden');
    } else {
        keyIcon.classList.add('hidden');
    }
});

// 監聽 password_eye icon的睜眼閉眼
password_eye.addEventListener('click', () => {
    password_eye.classList.toggle('fa-eye');
    password_eye.classList.toggle('fa-eye-slash');

    // 切換顏色
    if (password_eye.classList.contains('fa-eye')) {
        password_eye.style.color = ''; //使用默認顏色
        password.type = 'text';
    } else {
        password_eye.style.color = '#cececf';
        password.type = 'password';
    }
});


