

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Database.DatabaseConnection;

/**
 * Servlet implementation class add
 */
@WebServlet("/add")
public class add extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public add() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// do nothing
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		// get data from client
		//try{
			String name = request.getParameter("name");
			String countries = request.getParameter("countries");
			int count = Integer.parseInt(request.getParameter("count"));
			String explanation = request.getParameter("explanation");
			String wikipediaUrl = request.getParameter("wikipedia");
		//}catch(NumberFormatException nfe){
			//nfe.printStackTrace();		
		//}
						
			System.out.println("This works then this message is displayed");
				
			DatabaseConnection dbCon = new DatabaseConnection();
			dbCon.initConnection();
						
			RequestDispatcher rd = request.getRequestDispatcher("/HTML/speisekarteFormular.html");
			rd.forward(request, response);
				
	}

}
