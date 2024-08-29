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

        // document.addEventListener('DOMContentLoaded', function() {
        //     const milestones = [
        //         { id: 1, title: "マイルストーン1", date: "20YY 年 Q1" },
        //         { id: 2, title: "マイルストーン2", date: "20YY 年 Q2" },
        //         { id: 3, title: "マイルストーン3", date: "20YY 年 Q3" },
        //         { id: 4, title: "マイルストーン4", date: "20YY 年 Q4" },
        //         { id: 5, title: "マイルストーン5", date: "20YY 年 Q1" },
        //         { id: 6, title: "マイルストーン6", date: "20YY 年 Q2" },
        //         { id: 7, title: "マイルストーン7", date: "20YY 年 Q3" }
        //     ];
        
        //     const timelineContainer = document.getElementById('milestone-timeline');
        //     const timeline = document.createElement('div');
        //     timeline.className = 'timeline';
        
        //     milestones.forEach(milestone => {
        //         const milestoneItem = document.createElement('div');
        //         milestoneItem.className = 'milestone-item';
        
        //         const milestonePoint = document.createElement('div');
        //         milestonePoint.className = 'milestone-point';
        
        //         const milestoneContent = document.createElement('div');
        //         milestoneContent.className = 'milestone-content';
        
        //         const milestoneTitle = document.createElement('div');
        //         milestoneTitle.className = 'milestone-title';
        //         milestoneTitle.textContent = milestone.title;
        
        //         const milestoneDate = document.createElement('div');
        //         milestoneDate.className = 'milestone-date';
        //         milestoneDate.textContent = milestone.date;
        
        //         milestoneContent.appendChild(milestoneTitle);
        //         milestoneContent.appendChild(milestoneDate);
        
        //         milestoneItem.appendChild(milestonePoint);
        //         milestoneItem.appendChild(milestoneContent);
        
        //         timeline.appendChild(milestoneItem);
        //     });
        
        //     timelineContainer.appendChild(timeline);
        // });