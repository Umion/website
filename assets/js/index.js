	$(document).ready(function(){

			
		let preloader = document.querySelector('.preloader')
		setTimeout(function(){
			if(!preloader.classList.contains('hide')) {
				preloader.classList.add('hide')
			}
		},1000)
    


		function visibleNav(){
			if ($(window).scrollTop() > 100) {
		        $('#navBar').addClass('floatingNav');
		    } else {
		        $('#navBar').removeClass('floatingNav');
		    }
		}
		visibleNav()

		let floatingNav_active = true;
		$(window).scroll(function() {
		    if (floatingNav_active) visibleNav()
		});



		$('.ham1').click(function(){

			if (floatingNav_active) {
		        $('#navBar').addClass('floatingNav');
		    } else {
		    	if ($(window).scrollTop() < 100) {$('#navBar').removeClass('floatingNav')}
		    }

			$(this).toggleClass('active');
			$('.nav-mobile').toggleClass('active');
			floatingNav_active = !floatingNav_active
		})







		$('.case-slider__slides').on('init', function(event, slick){
				$('.case-slider .slider-nav__count').text('01');
			});
		$('.case-slider__slides').slick({
		  	 slidesToShow: 3,
		  	 centerMode: true,
		  	 slidesToScroll: 1,
			 autoplay: true,
			 autoplaySpeed: 2000,
			 speed: 700,
			 prevArrow: `<svg class='slick-prev' width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.10858 9.32589L8.8115 17.0288C8.9894 17.2054 9.22988 17.3044 9.48051 17.3044C9.73115 17.3044 9.97162 17.2054 10.1495 17.0288L10.7156 16.4604C10.8927 16.2828 10.9922 16.0422 10.9922 15.7914C10.9922 15.5406 10.8927 15.3 10.7156 15.1224L4.2501 8.64986L10.7156 2.17969C10.8922 2.00179 10.9912 1.76132 10.9912 1.51068C10.9912 1.26004 10.8922 1.01957 10.7156 0.841673L10.1495 0.275591C9.97161 0.0990354 9.73115 -4.18514e-05 9.48051 -4.18295e-05C9.22988 -4.18076e-05 8.98939 0.0990354 8.8115 0.275591L1.09221 7.99489C0.915365 8.17358 0.816161 8.41483 0.816161 8.66624C0.816161 8.91764 0.915365 9.15889 1.09221 9.33758L1.10858 9.32589Z" fill="#4D5154"/>
						</svg>`,
			 nextArrow: `<svg class='slick-next' width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.7 7.97856L2.99709 0.275634C2.8192 0.0990769 2.57872 0 2.32808 0C2.07744 0 1.83698 0.0990769 1.65908 0.275634L1.09299 0.844055C0.915866 1.02165 0.816406 1.26224 0.816406 1.51306C0.816406 1.76389 0.915866 2.00447 1.09299 2.18207L7.55849 8.65458L1.09299 15.1248C0.916435 15.3027 0.81737 15.5431 0.81737 15.7938C0.81737 16.0444 0.916435 16.2849 1.09299 16.4628L1.65908 17.0289C1.83698 17.2054 2.07744 17.3045 2.32808 17.3045C2.57872 17.3045 2.8192 17.2054 2.99709 17.0289L10.7164 9.30955C10.8932 9.13086 10.9924 8.88961 10.9924 8.63821C10.9924 8.3868 10.8932 8.14555 10.7164 7.96686L10.7 7.97856Z" fill="#4D5154"/>
						</svg>`,
			 pauseOnHover: false,
			 dots: true,
		     dotsClass: "slider-nav__custom-dots",
		     appendDots: $('.slider-nav__dots'),
		     appendArrows: $('.slider-nav__arrow'),
		     responsive: [
			    {
			      breakpoint: 1201,
			      settings: {
			        slidesToShow: 2,
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        dots: false,
			        arrows: false
			      }
			    }
			  ]
		}).on('beforeChange', function(event, slick, currentSlide, nextSlide){

				$('.slider-nav__dots_active').css({"left": nextSlide * $('.slider-nav__dots_active').width() +'px'})
				$('.case-slider .slider-nav__count').text(nextSlide>= 9 ? nextSlide+1 : `0${nextSlide+1}`)

			});
	
		  
	





		let tabs = document.querySelectorAll('.tabs-block__item'),
			decor_item1 = document.querySelector('.tabs-block__decor-line'),
			decor_item2 = document.querySelector('.tabs-block__decor-arrow'),
			decor_item3 = document.querySelector('.tabs-block__nav-decor_active'),

			b_count = document.querySelector('.b-count'),
			tab_active = 1,

			b_prev = document.querySelector('.b-prev'),
			b_next = document.querySelector('.b-next');

		tabs.forEach((el,i) => {
		  el.addEventListener('click', () => {
		    let tab = +el.getAttribute("data-tab");
		    tab_active = tab;
		    tabs.forEach((el,i) => {
		      el.classList.remove("active");
		    })
		    document.querySelectorAll(".tabs-block__content-item").forEach(item => {
		      item.classList.remove("active");
		    });
		    el.classList.add("active");
		    decor_item1.style.top = 25+70*i+'px'
		    decor_item2.style.top = 77 + 70*i+'px'
		    decor_item3.style.left = 25 * i + '%'
		    document.getElementById(tab).classList.add("active");
		    b_count.innerHTML = tab;
		    
		  })
		})

		
		

		b_prev.onclick = () => {
			let t;
			tab_active--;
			if (tab_active <= 0) {tab_active = 4};
			t =  tab_active;
			tabs.forEach((el,i) => {
		      el.classList.remove("active");
		      if (i+1 == t) {el.classList.add("active");}
		    })
		    document.querySelectorAll(".tabs-block__content-item").forEach((item, ind) => {
		      item.classList.remove("active");
		      if (ind+1 == t) {item.classList.add("active");}
		    });
		    decor_item1.style.top = 25+70*(t-1)+'px'
		    decor_item2.style.top = 77 + 70*(t-1)+'px'
		    decor_item3.style.left = 25 * (t-1) + '%'
		    b_count.innerHTML = t
		}
		b_next.onclick = () => {
			let t;
			tab_active++;
			if (tab_active > 4) {tab_active = 1};
			t =  tab_active;
			tabs.forEach((el,i) => {
		      el.classList.remove("active");
		      if (i+1 == t) {el.classList.add("active");}
		    })
		    document.querySelectorAll(".tabs-block__content-item").forEach((item, ind) => {
		      item.classList.remove("active");
		      if (ind+1 == t) {item.classList.add("active");}
		    });
		    decor_item1.style.top = 25+70*(t-1)+'px'
		    decor_item2.style.top = 77 + 70*(t-1)+'px'
		    decor_item3.style.left = 25 * (t-1) + '%'
		    b_count.innerHTML = t
		}





		$('.form-container__inp').each(function(inp) {
			let input = $(this).find('input');
			let label = $(this).find('label');
			input.focus(function(){
				label.addClass( "label_focus" );
			})
			input.blur(function(){
				 if (input.val().trim() == '') {
				 	input.val('')
				 	label.removeClass( "label_focus" )
				 }
			})
		})


		$('.benefits__q').click(function(){
			$(this).parent().find('.benefits__a').slideToggle()
		})
		$('.benefits__slider').slick({
		  	 slidesToShow: 4,
		  	 slidesToScroll: 1,
			 // autoplay: true,
			 pauseOnHover: false,
			 appendArrows: $('.benefits__slider-nav'),
			 responsive: [
			    {
			      breakpoint: 1401,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 2,
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			      }
			    }
			  ]
		})





		$('.testimonials-slider').on('beforeChange',function(e, s, c, n) {
		    $('.image-box').each(function(i,item) {
		      item.className = item.className.replace(/(order\-)\d+\s*/g, '');
		    })
		      
		  
			let lastPostOrder = 0;
			let prevGroup = $('.image-box:lt(' + n + ')')
			let nextGroup = $('.image-box:gt(' + n + ')')

		   
		   
		    $('.image-box').eq(n).addClass('order-1');
		      lastPostOrder = 1;
		    
		    
		    if(nextGroup.length > 0) {
		      nextGroup.each(function(i, el) {
		        lastPostOrder += 1;
		        $(el).addClass('order-' + lastPostOrder);
		      })
		    }
		    if(prevGroup.length > 0) {
		      prevGroup.each(function(i, el) {
		        lastPostOrder += 1;
		        $(el).addClass('order-' + lastPostOrder);
		      })
		    }
		  
		  })

		$('.testimonials-slider').slick({
			dots: true,
			fade: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,
			pauseOnHover: false,
			dotsClass: "testimonials-slider__dots",
			responsive: [
			    {
			      breakpoint: 1201,
			      settings: {
			        dots: false,
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        dots: false,
			      }
			    },
			  ]
		})
		var slider = $( '.testimonials-slider' );
		document.querySelectorAll(".testimonials__slider-wrap img").forEach((el,i) => {
			el.addEventListener('click', () => {
				slider[0].slick.slickGoTo(i);
			})
		})


		$('.technologies__slider').slick({
			dots: true,
			dotsClass: "testimonials-slider__dots",
			slidesToShow: 5,
			arrows: false,
			autoplay: true,
			responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 4,
			        centerMode: true,
			        dots: false,
			        arrow: true
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        arrows: false,
			        dots: false,
			      }
			    }
			  ]
		})



		$(".to_top").click(function() {
		  $("html, body").animate({ scrollTop: 0 }, "slow");
		  return false;
		});
		        

	});
