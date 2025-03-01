const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// التحقق إذا كان المستخدم مفعّل الوضع الليلي مسبقًا
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

// تبديل الوضع
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        themeToggle.textContent = '🌙';
    }
});
