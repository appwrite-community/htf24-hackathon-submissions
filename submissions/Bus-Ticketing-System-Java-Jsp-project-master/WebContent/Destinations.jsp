<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="AllLayout.*,com.digitalbd.*,java.util.ArrayList,java.util.Iterator,java.util.HashMap" %>
<%

String message = "";
Stations sts = new Stations();
String tempTime = "2018-09-05 00:00:00";
if(request.getParameter("createStation") != null){
	sts.name = (String) request.getParameter("name");
	sts.contact = (String) request.getParameter("contact");
	sts.address = (String) request.getParameter("address");
	sts.Save();
}
trains trn = new trains();
ArrayList<Train> trainlist = new ArrayList<Train>();
trainlist = trn.getAll();
Iterator trnIt = trainlist.iterator();


Destination desti = new Destination();
ArrayList<HashMap<String,String>> allDestinaions = new ArrayList<HashMap<String,String>>();
ArrayList<Station> stationList = sts.getAll();
Iterator stationIterator = stationList.iterator();
if(request.getParameter("save_all") != null){
	String[] station_toAr = request.getParameterValues("station_to[]");
	String[] jurny_timeAr = request.getParameterValues("jurny_time[]");
	String[] fareAr = request.getParameterValues("fare[]");
	String[] total_seatAr = request.getParameterValues("total_seat[]");
	String[] seat_rangeAr = request.getParameterValues("seat_range[]");
	for(int j = 0; j<station_toAr.length; j++){
		Destination tempDesti = new Destination();
		tempDesti.station_from = request.getParameter("station_from");
		tempDesti.train_id= request.getParameter("dst_train");
		tempDesti.station_to= station_toAr[j];
		tempDesti.time= jurny_timeAr[j];
		tempDesti.status= "active";
		tempDesti.fare= fareAr[j];
		tempDesti.last_activity= tempTime;
		tempDesti.last_modify_by= "0";
		tempDesti.total_seat=total_seatAr[j];
		tempDesti.seat_range= seat_rangeAr[j];
		tempDesti.type= "up";
		tempDesti.Save();
	}
	
}
if(request.getParameter("delete") != null){
	Destination deleteDesti = new Destination();
	deleteDesti.id = (String) request.getParameter("delete");
	deleteDesti.Delete();
	message = "Destination Deleted";
}
boolean isSearchBoxNeed = true;
if(request.getParameter("search") != null){
	isSearchBoxNeed = false;
	allDestinaions = desti.getAll(request.getParameter("station_from"),request.getParameter("dst_train"));
}

%>
    
<%@ include file="header.jsp" %>
<div class="signpage">
<% if(!message.equals("")){ %>
<div class="alert alert-danger"><p><%= message %></p></div>
<% } %>
	<% if(isSearchBoxNeed){ %>
	<form class="register_form" action="<%= Helper.baseUrl %>Destinations.jsp?search=1" method="get">
		
		<div class="row">
			<div class="col-xs-12 col-sm-6 offset-sm-3">
				<div class="rs_form_box">
					<h3 class="form_section_title">
						Information
					</h3>
					<div class="input-group">
						<label>Select Train</label>
						<select name="dst_train" class="form-control" style="width:auto;">
							<%
								while(trnIt.hasNext()){
									Train trnTemp = (Train) trnIt.next();
									%>
									<option value="<%= trnTemp.id %>"><%= trnTemp.name+" ("+trnTemp.code+")" %></option>
									<%
								}
							%>
						</select>
					</div>
					
					<div class="input-group">
						<label>Station From</label>
						<select name="station_from" class="form-control" style="width:auto;">
							<%
								while(stationIterator.hasNext()){
									Station stsTemp = (Station) stationIterator.next();
									%>
									<option value="<%= stsTemp.id %>"><%= stsTemp.name %></option>
									<%
								}
							%>
						</select>
					</div>

				</div>

			</div>
			<div class="col-xs-12 col-sm-12 text-center">
				<div class="rs_btn_group">
					<button class="btn btn-default pull-left" name="search" value="1" type="submit">Search</button>
				</div>
			</div>
		</div>
	</form>
	<% }else{ %>
		<div class="rs_box" style="overflow:auto;">
			<form class="ticket_selecting_form" method="post" name="frm_deslist">
				<h2 class="title"> Train Name: Tista <br>Station From: Dhaka </h2>
				<table class="table table_des_seat" id="table_des_list">
					<tr>
						<th>Station To</th>
						<th>Time</th>
						<th>Unit Fare</th>
						<th>Total Seat</th>
						<th>Seat Range (10-15)</th>
						<th width="50" align="center">Actions</th>
					</tr>
					<%
					Iterator itrTemp = allDestinaions.iterator();
					Stations tempToFromStation = new Stations();
					while(itrTemp.hasNext()){
						HashMap<String,String> tempDestination = (HashMap<String,String>) itrTemp.next();
						Station tempToStation = tempToFromStation.getStation(tempDestination.get("station_to"));
						%>
						<tr>
							<td>
								<div class="input-group">
									<label><%= tempToStation.name %></label>
								</div>
	
							</td>
							<td>
								<div class="input-group">
									<label><%= tempDestination.get("time") %></label>
								</div>
							</td>
							<td>
								<div class="input-group">
									<label><%= tempDestination.get("fare") %></label>
								</div>
							</td>
							<td>
								<div class="input-group">
									<label><%= tempDestination.get("total_seat") %></label>
								</div>
							</td>
							
							<td align="center">
								<div class="input-group">
									<label><%= tempDestination.get("seat_range") %></label>
								</div>
							</td>
							<td><a href="?delete=<%= tempDestination.get("id") %>" class="btn btn-danger btn-xs rv_destination" type="button">X</button></td>
						</tr>
						<%
					}
					%>
					
					
				</table>
				<div class="text-center">
					<div class="rs_btn_group">
						<button class="btn btn-success pull-left" name="save_all" type="submit">Save All</button>
						<button id="btn_add_new_item" class="btn btn-info pull-left" name="search" type="button">Add New Item</button>
					</div>
				</div>
			</form>
			
			<table id="data_list_item" style="display:none;">
				
		
					<tr>
									<td>
										<div class="input-group">
											<select name="station_to[]" class="form-control">
												<%
														for(int i =0; i<stationList.size(); i++){
															Station stsTemp = (Station) stationList.get(i);
															%>
															<option value="<%= stsTemp.id %>"><%= stsTemp.name %></option>
															<%
														}
													%>
										</select>
							</div>
					
						</td>
						<td>
							<div class="input-group">
								<input class="form-contoller" name="jurny_time[]">
							</div>
						</td>
						<td>
							<div class="input-group">
								<input class="form-contoller" name="fare[]">
							</div>
						</td>
						<td>
							<div class="input-group">
								<input class="form-contoller" name="total_seat[]">
							</div>
						</td>
						
						<td align="center">
							<div class="input-group">
								<input class="form-contoller" name="seat_range[]">
							</div>
						</td>
						<td><button class="btn btn-danger btn-xs rv_destination" type="button">X</button></td>
					</tr>
			</table>
			
		</div>
	<% } %>
	
	
</div>
<%@ include file="footer.jsp" %>