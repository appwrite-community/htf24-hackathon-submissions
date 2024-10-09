<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="com.digitalbd.Helper,com.digitalbd.User,com.digitalbd.trains,java.util.*" %>
<%
	String message = "";
	if(request.getParameter("createTrain") != null){
		trains trn = new trains();
		trn.name = (String) request.getParameter("name");
		trn.code = (String) request.getParameter("code");
		trn.type = (String) request.getParameter("coach");
		String totalSeat = (String) request.getParameter("totalseat");
		trn.totalSeat = Integer.parseInt(totalSeat);
		trn.Save();
		message = "Train Created";
		
	}
%>
<%@ include file="header.jsp" %>
<div class="signpage">
<% if(!message.equals("")){ %>
	<div class="alert alert-info"><p><%= message %></p></div>
	<% } %>
	<form class="register_form" action="<%= Helper.baseUrl %>Add.jsp" method="post">
		
		<div class="row">
			<div class="col-xs-12 col-sm-6 col-sm-offset-3">
				<div class="rs_form_box">
					<h3 class="form_section_title">
						Train Informations
					</h3>
					<div class="input-group">
						<label>Name</label>
						<input type="text" name="name" class="form-controller">
					</div>
					<div class="input-group">
						<label>Code</label>
						<input type="text" name="code" class="form-controller">
					</div>
					<div class="input-group">
						<label>Total Seat</label>
						<input type="text" name="totalseat" class="form-controller">
					</div>
					<div class="input-group">
						<div class="form-group">
							<label>Class :</label>
							<select class="form-control" name="coach" >
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
				</div>

			</div>
			<div class="col-xs-12 col-sm-12 text-center">
				<div class="rs_btn_group">
					<button class="btn btn-default pull-left" name="createTrain" value="submit" type="submit">Save</button>
				</div>
			</div>
		</div>
	</form>
</div>
<%@ include file="footer.jsp" %>