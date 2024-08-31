        // カルーセル機能
        const carousel = document.querySelector('.carousel-inner');
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

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
        });

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
        });


        // ハンバーガーメニューのスタイル
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger-menu');
            const navLinks = document.querySelector('.nav-links');
        
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        });

        // 自動スライド（オプション）
        setInterval(nextSlide, 5000);

        //
        // -------------------  vision.htmlのスタイル  ----------------------------
        document.addEventListener('DOMContentLoaded', function () {
            const timeline = document.querySelector('.timeline');
            const milestones = document.querySelectorAll('.milestone-item');

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
        });

        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger-menu');
            const navLinks = document.querySelector('.nav-links');
        
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        });

        
