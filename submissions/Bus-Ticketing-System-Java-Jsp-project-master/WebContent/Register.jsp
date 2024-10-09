<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="com.digitalbd.Helper,com.digitalbd.User" %>
<%
String message = "";
if(request.getParameter("submit") != null){
	User user = new User();
	user.name = request.getParameter("name");
	user.email = request.getParameter("email");
	user.phone = request.getParameter("phone");
	user.password = request.getParameter("password");
	user.address = request.getParameter("address");
	user.rule="passenger";
	message = user.CheckRegisValidation();
	if(message == null){
		if(!request.getParameter("email_con").equals(user.email)){
			message = "Email are not same.";
		}else if(!request.getParameter("password_con").equals(user.password)){
			message = "Password are not same";
		}else if(user.ResiterUser()){
			/* session.setAttribute("islogin", true);
			response.sendRedirect("Dashboard.jsp"); */
			message = "Registration Success! Please login";
		}else{
			message = "User Phone or Email Exist";
		}
	}
	
	
}
%>

<%@ include file="header.jsp" %>
<div class="signpage">
	<% if(!message.equals("")){ %>
	<div class="alert alert-danger"><p><%= message %></p></div>
	<% } %>
	<form class="register_form" action="<%= Helper.baseUrl %>Register.jsp" method="post">
		
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<div class="rs_form_box">
					<h3 class="form_section_title">
						Personal Information
					</h3>
					<div class="input-group">
						<label>Passenger Name*</label>
						<input type="text" name="name" class="form-controller">
					</div>
					<div class="input-group">
						<label>Email Address*</label>
						<input type="email" name="email" class="form-controller">
					</div>
					<div class="input-group">
						<label>Re-Enter Email address*</label>
						<input type="email" name="email_con" class="form-controller">
					</div>

					<div class="input-group">
						<label>Password*</label>
						<input type="password" name="password" class="form-controller">
					</div>

					<div class="input-group">
						<label>Re-Enter Password*</label>
						<input type="password" name="password_con" class="form-controller">
					</div>

				</div>

			</div>
			<div class="col-xs-12 col-sm-6">
				<div class="rs_form_box">
					<h3 class="form_section_title">
						Extra information
					</h3>
					<div class="input-group">
						<label>Address</label>
						<textarea name="address" class="form-controller"></textarea>
					</div>
					<div class="input-group">
						<label>Phone Number</label>
						<input type="text" name="phone" class="form-controller">
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 text-center">
				<div class="rs_btn_group">
					<button class="btn btn-default pull-left" name="submit" type="submit">Register</button>
					<a href="<%= Helper.baseUrl %>Login.jsp" class="btn btn-default">Login here.</a>
				</div>
			</div>
		</div>
	</form>
</div>
<%@ include file="footer.jsp" %>