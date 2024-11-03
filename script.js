function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // 隱藏
    } else {
        sidebar.style.left = "0px"; // 顯示
    }
}
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    $('#backToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });
    
    // 顯示/隱藏介紹段落
    $('#toggleIntro').click(function() {
        $('#introduction p').slideToggle(500);
    });

    // 顯示/隱藏桃莉羊圖片
    $('#toggleDollyImage').click(function() {
        $('#dollyImage').fadeToggle(500);
    });

    // 顯示/隱藏黑足鼬圖片
    $('#toggleFerretImage').click(function() {
        $('#ferretImage').fadeToggle(500);
    });

    // 顯示/隱藏靈長類圖片
    $('#toggleMonkeyImage').click(function() {
        $('#monkeyImage').fadeToggle(500);
    });

    // 懸停變色效果
    $('button').hover(
        function() {
            $(this).css('background-color', '#314d84');
        }, 
        function() {
            $(this).css('background-color', '#3a5d99');
        }
    );

    // 當網頁捲動時淡入效果
    $(window).scroll(function() {
        $('.fade-in-section').each(function() {
            const sectionTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > sectionTop) {
                $(this).animate({ opacity: 1 }, 1000);
            }
        });
    });

    // 點擊圖片時放大並顯示邊框效果
    $('img').click(function() {
        $(this).toggleClass('zoomed'); // 使用 CSS class 切換放大效果
    });

    // 了解更多按鈕的閃爍效果
    $('#learnMoreBtn').hover(
        function() {
            $(this).animate({ opacity: 0.5 }, 300).animate({ opacity: 1 }, 300);
        }
    );
    // jQuery example for a back-to-top button
    $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#backToTop').fadeIn();
    } else {
        $('#backToTop').fadeOut();
    }
    });
    $('#backToTop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
    });

    $(window).scroll(function() {
        const scrollPos = $(document).scrollTop();
        $('nav a').each(function() {
            const currLink = $(this);
            const refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });
    

});



