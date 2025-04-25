// القائمة المتحركة للهواتف
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// إظهار الآيات عند الضغط على الزر
document.getElementById('revelationBtn').addEventListener('click', function() {
    const verses = document.getElementById('revelationVerses');
    verses.classList.toggle('hidden');
    
    if (verses.classList.contains('hidden')) {
        this.textContent = 'رؤية أول الآيات';
    } else {
        this.textContent = 'إخفاء الآيات';
    }
});

// إضافة تأثير عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// تنعيم التمرير للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // إغلاق القائمة إذا كانت مفتوحة على الهاتف
        if (document.querySelector('nav ul').classList.contains('show')) {
            document.querySelector('nav ul').classList.remove('show');
        }
    });
});

// تحميل الصفحة
window.addEventListener('DOMContentLoaded', function() {
    // يمكن إضافة المزيد من الوظائف هنا عند الحاجة
});