package Database;

import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
	Connection conn;
	ResultSet rs;

	public DatabaseConnection() {
		initConnection();
	}

	public void initConnection() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://84.200.222.55:3306/speisekarte", "speisekarte",
					"speisekarte");
			System.out.println("Connected");
			// Do something with the Connection
		} catch (SQLException ex) {
			// handle any errors
			System.out.println("SQLException: " + ex.getMessage());
			System.out.println("SQLState: " + ex.getSQLState());
			System.out.println("VendorError: " + ex.getErrorCode());
		} catch (Exception ae) {
			ae.getStackTrace();
		}
	}
/**
 * Allows to send a simple sql statement to the sql server
 * @param req a String that can be parsed as an SQL Statement
 * @return 
 */
	public ResultSet sendDatabaseRequest(String req) {
		if (conn == null) {
			throw new NullPointerException();
		}
		try {
			Statement stmt = conn.createStatement();
			if(stmt.execute(req))				{
				rs=stmt.getResultSet();
		};
		} catch (SQLException ex) {
			// handle any errors
			System.out.println("SQLException: " + ex.getMessage());
			System.out.println("SQLState: " + ex.getSQLState());
			System.out.println("VendorError: " + ex.getErrorCode());
		}
		return rs;
	}

	public static void main(String args[]) {
		DatabaseConnection db = new DatabaseConnection();
		db.sendDatabaseRequest("CREATE TABLE pet (name VARCHAR(20), owner VARCHAR(20), species VARCHAR(20), sex CHAR(1), birth DATE, death DATE);");
	}
}
