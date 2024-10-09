package TicketSystemInterface;

public interface DatabaseModel {
	String tableName = null;
	/*Save all data*/
	public int Save();
	/*Update all Data*/
	public int Update();
	/*Delete Data*/
	public void Delete();
	/*Get Current Table Name*/
	String GetTableName();
	default void SetById(int id) {};
}
