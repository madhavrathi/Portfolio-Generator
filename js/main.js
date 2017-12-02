jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	var headingBlock = $('.next-heading'),
			btnBlock = $('.download-btn');

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);
  myHideBlocks(headingBlock, offset);
	myHideBlocks(btnBlock, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){
				 showBlocks(timelineBlocks, offset);
				 myShowBlocks(headingBlock, offset);
 				 myShowBlocks(btnBlock, offset);
			 }, 100)
			: window.requestAnimationFrame(function(){
				showBlocks(timelineBlocks, offset);
				myShowBlocks(headingBlock, offset);
				myShowBlocks(btnBlock, offset);
			});
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function myHideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	function myShowBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('is-hidden') ) && $(this).removeClass('is-hidden').addClass('bounce-in');
		});
	}
});
