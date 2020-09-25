<style type="text/css">
    @media (min-width: 768px) {
        .elementor-location-header{
            background: #fff;
            z-index: 1;
        }
    	.slf_section .height50vh .elementor-column-wrap{
    		position: fixed;
    		top: 83px;
    		left: 0;
    		width: 50%;
    		height: 100%;
    		opacity: 0;
    		z-index: -1;
    		transition: all .4s;
    	}
    	.slf_section .height50vh.active .elementor-column-wrap{
    		opacity: 1;
    
    	}
    }
</style>
<script>
	function isElementInViewport(el, breakpoint) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top <= breakpoint &&
			rect.bottom >= breakpoint 
		);
	}
	var onScrollHandler = function() {
	  let section = document.getElementsByClassName('slf_section')
	  let breakpoint = 300;
	  for (var i = 0; i < section.length; i++) {
	  	if (isElementInViewport(section[i], breakpoint)) {
	  		if (currentSection != section[i]) {
	  			currentSection = section[i];
	  			console.log(currentSection.querySelector('.height50vh'))
	  			for (var item of document.querySelectorAll('.height50vh')) {
					item.classList.remove('active');
				}
				currentSection.querySelector('.height50vh').classList.add('active')
	  		}
	  	}
	  }

	};

	let currentSection = ''
	window.addEventListener ("scroll", onScrollHandler);
</script>
