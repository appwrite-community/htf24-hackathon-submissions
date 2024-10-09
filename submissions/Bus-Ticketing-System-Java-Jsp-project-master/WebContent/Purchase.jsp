<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.*,com.digitalbd.*,AllLayout.*"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
	Stations stations = new Stations();
	ArrayList<Station> allStations = stations.getAll();
%>
<%@ include file="header.jsp" %>
<div class="signpage">
	<form class="register_form" style="max-width:400px;" action="<%= Helper.baseUrl %>TicketDisplay.jsp" method="post">
		<div class="rs_form_box">
			<h3 class="form_section_title">
				 PURCHASE TICKET
			</h3>
			<div class="form-group">
				<label>Station From :</label>
				<select class="form-control" name="from" id="from_where_select">
					<%
					for(int i =0; i<allStations.size(); i++){
						Station stn = allStations.get(i);
						%>
						<option value="<%= stn.id %>"><%= stn.name %></option>
						<%
					}
					%>
				</select>
			</div>
			
			<div class="form-group">
				<label>Journey Date :</label>
				<select class="form-control" name="journey_date" id="from_where_select">
					<%
					SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-YYYY");
					Calendar cal = Calendar.getInstance();
					cal.add(Calendar.DAY_OF_YEAR, 0);

					for(int i = 0; i< 10; i++){
					    cal.add(Calendar.DAY_OF_YEAR, 1);
					    String tempDtate = dateFormat.format(cal.getTime());
					    %>
					    <option value="<%= tempDtate %>"><%= tempDtate %></option>
					    <%
					}
					%>
					
				</select>
			</div>
			
			<div class="form-group">
				<label>Station To :</label>
				<select class="form-control" name="to" id="from_where_select">
					<%
					for(int i =0; i<allStations.size(); i++){
						Station stn = allStations.get(i);
						%>
						<option value="<%= stn.id %>"><%= stn.name %></option>
						<%
					}
					%>
				</select>
			</div>
			
			<div class="form-group">
				<label>Coach Type :</label>
				<select class="form-control" name="coach" id="from_where_select" >
				<option value="any">Any Coach</option>
				<%
				HashMap<String,String> coach = Helper.TrainsCoach();
				for(Map.Entry<String, String> temp:coach.entrySet()){
					%>
					<option value="<%= temp.getKey() %>"><%= temp.getValue() %></option>
					<%
				}
				%>
				</select>
			</div>

		</div>
		<div class="text-center">
			<div class="rs_btn_group">
				<button class="btn btn-default" type="submit">Search</button>
			</div>
		</div>
	</form>
</div>
<%@ include file='footer.jsp' %>