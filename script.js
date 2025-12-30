// 返回顶部功能
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 为所有社交媒体按钮添加点击效果
const socialButtons = document.querySelectorAll('.social-btn');

socialButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // 添加点击反馈
        this.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // 如果是Github或Bilibili按钮，添加控制台日志
        if (this.classList.contains('github')) {
            console.log('正在跳转到GitHub...');
        } else if (this.classList.contains('bilibili')) {
            console.log('正在跳转到Bilibili...');
        }
    });
});

// 动态更新年份
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
    }
    
    // 添加技能标签的随机颜色效果
    const skillTags = document.querySelectorAll('.skill-tag');
    const colors = [
        'rgba(106, 17, 203, 0.7)',
        'rgba(37, 117, 252, 0.7)',
        'rgba(255, 87, 34, 0.7)',
        'rgba(76, 175, 80, 0.7)',
        'rgba(233, 30, 99, 0.7)',
        'rgba(255, 193, 7, 0.7)'
    ];
    
    skillTags.forEach(tag => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        tag.style.background = randomColor;
        
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 添加页面加载动画
    const glassElements = document.querySelectorAll('.glass-effect');
    glassElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});