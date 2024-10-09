(function($){
	var homeSlider = $('.home_page_slider');
	homeSlider.owlCarousel({
		items:1,
		loop:true,
		dots:false,
		nav:true,
		autoplay:true
		
	});
	$('#btn_add_new_item').on('click',function(e){
		$("#table_des_list").append($("#data_list_item").html())
	});
	$("body").on('click','.rv_destination',function(e){
		$(this).closest('tr').remove();
	})
	
	$(".rs_search_ticket").on("click",function(e){
		e.preventDefault();
		$("#rs_ticket_result").html("<div class='loading'></div>");
		var url = $('.ticket_selecting_form').attr('action');
		var data = {
			actionType: "search",
			date: $(this).attr("data-date"),
			totalSeat: $(this).closest('tr').find('.total_seat_select').val(),
			destination: $(this).attr("data-destination"),
		};
		$.post(url,data,function(res){
			var response = res;
			setTimeout(function(){
				$("#rs_ticket_result").html(response);
			},500);
			
		})
	})
	$("body").on('click', '.btn_confirm_ticket', function(event) {
		event.preventDefault();
		$("#rs_ticket_result").html("<div class='loading'></div>");
		var url = $('.ticket_selecting_form').attr('action');
		var data = {
			actionType: "ticketConfirm",
			date: $(this).attr("data-date"),
			totalSeat: $(this).attr("data-seat"),
			destination: $(this).attr("data-destination"),
		};
		$.post(url,data,function(res){
			var response = res;
			setTimeout(function(){
				$("#rs_ticket_result").html(response);
			},500);
			
		})
	});
}(jQuery))