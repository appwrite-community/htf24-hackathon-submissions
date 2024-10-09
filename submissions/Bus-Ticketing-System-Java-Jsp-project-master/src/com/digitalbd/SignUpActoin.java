package com.digitalbd;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/SignUpActoin")
public class SignUpActoin extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ArrayList<String> formData;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		formData = new ArrayList<String>();
		
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String password =  request.getParameter("password");
		
		
		out.println("<br>Name" + name);
		out.println("<br>Email" + email);
		out.println("<br>Passord" + password);
		
		HttpSession session = request.getSession();
		
		formData.add(name);
		formData.add(email);
		formData.add(password);
		
		session.setAttribute("formData", formData );
		
		out.println("<br> <a href='SessionTest  '>View Session Data</a>");
	}

}
