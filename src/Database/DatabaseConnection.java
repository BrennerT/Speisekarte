package Database;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
	Connection conn;
	public void initConnection(){
		try {
			Class.forName("com.mysql.jdbc.Driver");
		    conn =
		       DriverManager.getConnection("jdbc:mysql://84.200.222.55:3306/speisekarte","speicsekarte", "speisekarte");
		    System.out.println("Connected");
		    // Do something with the Connection
		} catch (SQLException ex) {
		    // handle any errors
		    System.out.println("SQLException: " + ex.getMessage());
		    System.out.println("SQLState: " + ex.getSQLState());
		    System.out.println("VendorError: " + ex.getErrorCode());
		}catch(Exception ae){
			ae.getStackTrace();
		
	}
}
	public static void main(String args[]){
		DatabaseConnection db = new DatabaseConnection();
		db.initConnection();
	}
}
