<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%@ page import="com.digitalbd.Helper,com.digitalbd.trains,java.util.ArrayList,AllLayout.Train,java.util.Iterator" %>   
<%@ include file="header.jsp" %>
<%

	trains trn = new trains();

	if(request.getParameter("delete") != null){
		String trnId = (String) request.getParameter("delete");
		trn.Delete(trnId);
	}

	ArrayList<Train> trainlist = new ArrayList<Train>();
	trainlist = trn.getAll();
	Iterator trnIt = trainlist.iterator();
%>
<div class="text-right">
	<a class="btn btn-success" href="Add.jsp">Create Train</a>
</div>
<br>
<div class="box successfully_purschase_ticket">
	<h2 class="box_title">All Train List</h2>
	<table class="table table-bordered">
		<tr>
			<td wide="50">Train Code</td>
			<td>Name</td>
			<td>Coach</td>
			<td>Total Seat</td>
			<td>Actions</td>
		</tr>
		<%
		while(trnIt.hasNext()){
			Train trin = (Train) trnIt.next();
			
			%>
			<tr>
				<td><%= trin.code %></td>
				<td><%= trin.type %></td>
				<td><%= trin.name %></td>
				<td><%= trin.totalSeat %></td>
				<td><a href="?delete=<%= trin.id %>" class="btn btn-sm btn-danger">Delete</a></td>
			</tr>
			<%
		}
		%>
		
	</table>
</div>
<%@ include file="footer.jsp" %>