package com.digitalbd;

import java.util.HashMap;

public class Helper {
	public static String baseUrl = "http://localhost:8080/Train_Ticket_System/";
	public static String TestName="T ruon";
	public static String Currency = "TK";
	public static HashMap<String,String> TrainsCoach(){
		HashMap<String,String> coach = new HashMap<String,String>();
		coach.put("Shuvon", "Shuvon");
		coach.put("F-Class", "F-Class");
		coach.put("Snigdha", "Snigdha");
		coach.put("S-Chair", "S-Chair");
		return coach;
	}
}
