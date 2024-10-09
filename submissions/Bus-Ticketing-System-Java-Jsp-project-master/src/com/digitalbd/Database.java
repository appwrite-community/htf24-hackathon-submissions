package com.digitalbd;
import java.sql.*;
public class Database {
	private String hostName = "jdbc:mysql://localhost:3306/ticketing_system";
	private String userName = "root";
	private String userPassword = "1234568";
	public Statement statement;
	private Connection con;
	public Database() {
		this.con = null;
		this.statement = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			this.con = DriverManager.getConnection(hostName,userName,userPassword);
			this.statement = this.con.createStatement();
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
}
