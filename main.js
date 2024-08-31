document.addEventListener('DOMContentLoaded', function() {
    // カルーセル機能
    const carousel = document.querySelector('.carousel-inner');
    if (carousel) {
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = document.querySelector('.carousel-control.prev');
        const nextBtn = document.querySelector('.carousel-control.next');
        let currentIndex = 0;

        function showSlide(index) {
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                nextSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                prevSlide();
            });
        }

        // 自動スライド（オプション）
        setInterval(nextSlide, 5000);
    }

    // ハンバーガーメニューのスタイル
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            console.log('Hamburger menu clicked'); // デバッグ用
        });
    } else {
        console.error('Hamburger menu or nav links not found'); // デバッグ用
    }

    // vision.htmlのタイムライン機能
    const timeline = document.querySelector('.timeline');
    const milestones = document.querySelectorAll('.milestone-item');

    if (timeline && milestones.length > 0) {
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function animateMilestones() {
            milestones.forEach((milestone, index) => {
                if (isElementInViewport(milestone)) {
                    setTimeout(() => {
                        milestone.classList.add('appear');
                    }, index * 200);
                }
            });
        }

        window.addEventListener('scroll', animateMilestones);
        animateMilestones(); // Initial check on page load
    }
});