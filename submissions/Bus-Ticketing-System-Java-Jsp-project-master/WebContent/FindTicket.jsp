<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.util.*,com.digitalbd.*,AllLayout.*" %>
<%
	
	String totalSeat = request.getParameter("totalSeat");
	String date = request.getParameter("date");
	String destination = request.getParameter("destination");
	String actionType = request.getParameter("actionType");
	Double bankCharge = 0.0;
	String userId = (String) session.getAttribute("user_id");
	if(totalSeat != null && date != null && destination != null && actionType.equals("search")){
		Booking booking = new Booking();
		HashMap<String,String> tickDetails = booking.Find(destination, date, totalSeat);
		
		if(tickDetails.get("is_avaiable").equals("yes")){
			Double totalamount = 0.0;
			totalamount = Double.parseDouble(tickDetails.get("fare")) * Double.parseDouble(totalSeat);
			Stations tempStation = new Stations();
			Station stationFrom = tempStation.getStation(tickDetails.get("from"));
			Station stationTo = tempStation.getStation(tickDetails.get("to"));
		%>
		<div class="ticket_info">
			<h2>Ticket Details</h2>
			<table class="table">
				<tr>
					<td>
						<ul>
							<li><strong>Journey Date</strong> <span><%= tickDetails.get("j_date")+" "+tickDetails.get("time") %></span></li>
							<li><strong>From Station</strong> <span><%= stationFrom.name %></span></li>
							<li><strong>To Station</strong> <span><%= stationTo.name %></span></li>
						</ul>
					</td>
					<td>
						<ul>
							<li><strong>Train / Number</strong> <span><%= tickDetails.get("train_name") %></span></li>
							<li><strong>Class/Coach</strong> <span><%= tickDetails.get("train_type") %></span></li>
							<li><strong>Total Seat</strong> <span><%= totalSeat %></span></li>
						</ul>
					</td>
					<td>
						<ul>
							<li><strong>Fare</strong> <span><%= Double.toString(totalamount) + " "+ Helper.Currency %></span></li>
							<li><strong>Bank Charge</strong> <span><%= bankCharge + " "+ Helper.Currency %></span></li>
							<li><strong>Total Amount</strong> <span><%= (totalamount+bankCharge)+ " "+ Helper.Currency %></span></li>
						</ul>
					</td>
				</tr>
			</table>
			<div class="rs_btn_sections">
				<a href="" class="btn btn-success btn_confirm_ticket" data-destination="<%= destination %>" data-seat="<%= totalSeat %>" data-date="<%= date %>">Confirm/Book Now</a>
			</div>
		</div>
		<% 
		} 
		
	}else{
		String tickId = "10";
		request.setAttribute("ticket_id", "10");
		String destinationId = request.getParameter("destination");
		String message = "";
		boolean isError = false;
		Destination destObj = new Destination(destinationId);
		Booking booking = new Booking();
		try{
			
			
			if(!booking.IsAvailable(destObj , date, totalSeat)){
				isError = true;
				message = "Seat Is not Available!";
			}
		}catch(Exception e){
			e.printStackTrace();
			System.out.println(e.getMessage());
		}
		if(isError){
			%>
			<div class="alert alert-default alert-danger text-center">
				<%= message %>
			</div>
			<%
		}else{
			
			long bookedId = booking.BookNow(destObj, userId, date, totalSeat);
		
		%>
		<div class="ticket_info">
			<h2>Congratulation! Your ticket has been booked.</h2>
			<p class="text_center">Please print your ticket.</p>
		</div>
		<%@ include file="PrintTicket.jsp" %>
		<%
		}
	}
	%>