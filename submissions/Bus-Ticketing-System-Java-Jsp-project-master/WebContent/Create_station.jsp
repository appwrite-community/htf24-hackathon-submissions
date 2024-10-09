<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@ include file="header.jsp" %>
<div class="signpage">

	<form class="register_form" action="<%= Helper.baseUrl %>Register.jsp" method="post">
		
		<div class="row">
			<div class="col-xs-12 col-sm-6 col-sm-offset-3">
				<div class="rs_form_box">
					<h3 class="form_section_title">
						Station Information
					</h3>
					<div class="input-group">
						<label>Station Name</label>
						<input type="text" name="code" class="form-controller">
					</div>
					<div class="input-group">
						<label>Address</label>
						<input type="text" name="code" class="form-controller">
					</div>
					<div class="input-group">
						<label>Contact</label>
						<input type="text" name="code" class="form-controller">
					</div>

				</div>

			</div>
			<div class="col-xs-12 col-sm-12 text-center">
				<div class="rs_btn_group">
					<button class="btn btn-default pull-left" name="submit" type="submit">Save</button>
				</div>
			</div>
		</div>
	</form>
</div>
<%@ include file="footer.jsp" %>