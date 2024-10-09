package com.digitalbd;

import TicketSystemInterface.DatabaseModel;
import jdk.incubator.http.HttpResponse;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;

import javax.servlet.http.HttpSession;
import com.mysql.*;
public class User implements DatabaseModel{
	public String id,name,email,phone,password,rule,reg_date,last_activity,address;
	public Database db;
	String dbTable = "users";
	public String isDbConnected = "no";
	public User(){
		this.DefaultConstructorData();
	}
	public User(String argId) {
		this.DefaultConstructorData();
		this.SetUserFromId(argId);
	}
	private void DefaultConstructorData() {
		this.id=this.name=this.email=this.phone=this.password=this.rule=this.reg_date=this.last_activity = this.address ="";
		this.db = new Database();
	}
	public void SetUserFromId(String argId) {
		String sqlArg = "SELECT * FROM "+this.GetTableName()+" WHERE id='"+argId+"'";
		try {
			ResultSet result = (ResultSet) this.db.statement.executeQuery(sqlArg);
			while(result.next()) {
				this.name = result.getString("name");
				this.id = result.getString("id");
				this.email = result.getString("email");
				this.phone = result.getString("phone");
				this.rule = result.getString("rule");
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public boolean isEmailOrPhoneExist(String phoneOrEmail) {
		boolean isExist = false;
		String queryString = "SELECT * FROM "+this.GetTableName()+" WHERE phone = '"+phoneOrEmail+"' OR email = '"+phoneOrEmail+"'";
		try {
			ResultSet result = (ResultSet) this.db.statement.executeQuery(queryString);
			if(result.next())
				isExist = true;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return isExist;
	}
	
	public long doLogin(String argUser,String argPass) {
		long returnData = 0;
		String queryString = "SELECT id from "+ this.GetTableName() + " WHERE (phone = '"+argUser+"' || email = '"+argUser+"') AND password = '"+argPass+"'";
		try {
			ResultSet result = (ResultSet) this.db.statement.executeQuery(queryString);
			if(result.next()) {
				returnData = Long.parseLong(result.getString("id"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return returnData;
	}
	public void SetUserSession(HttpSession sessionArg) {
		sessionArg.setAttribute("user_id", this.id);
	}
	@Override
	public int Save() {
		String sqlQuery = "INSERT";
		return 0;
	}

	@Override
	public int Update() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void Delete() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String GetTableName() {
		// TODO Auto-generated method stub
		return this.dbTable;
	}
	
	public boolean ResiterUser() {
		long userId =this.InsertNew();
		System.out.println(userId);
		if(userId != 0) {
			return true;
		}
		return false;
	}
	
	private long InsertNew() {
		long lastUserId = 0;
		if(this.isEmailOrPhoneExist(email) || this.isEmailOrPhoneExist(phone)) {
			return lastUserId;
		}
		String sqlQquery = "INSERT INTO " +this.GetTableName() 
							+"(name,email,phone,password,address,rule) "
							+ " VALUES('"+this.name+"','"+this.email+"','"+this.phone+"','"+this.password+"','"+this.address+"','"+this.rule+"')";
		try {
			lastUserId = this.db.statement.executeUpdate(sqlQquery,Statement.RETURN_GENERATED_KEYS);
			
		} catch (Exception e) {
			System.out.println("User.InsertNew: "+e.getMessage());
		}
		
		return lastUserId;
	}
	
	public String CheckRegisValidation() {
		String msg = null;
		if(this.name.equals(null) || this.name.equals("")) {
			msg = "User Full Name Required!";
		}else if(this.email.equals(null) || this.email.equals("")) {
			msg = "Email is Required!";
		}else if(this.password.equals(null) || this.password.equals("")) {
			msg = "Password is Required!";
		}else if(this.phone.equals(null) || this.phone.equals("")) {
			msg = "Phone is Required!";
		}
		return msg;
	}

}
