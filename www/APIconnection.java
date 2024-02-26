import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URI;
import java.io.FileWriter;


public class APIconnection {

    public static void main(String[] args) {

        try {
            URL urlAPI = URI.create("https://api.open-meteo.com/v1/forecast?latitude=42.8333&longitude=12.8333&hourly=temperature_2m").toURL();
            URLConnection APIconnection = urlAPI.openConnection();

            InputStream inputStream = APIconnection.getInputStream();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            String line = bufferedReader.readLine(); // reads a line

            FileWriter fileWriter = new FileWriter("meteoItaly.json");
            fileWriter.write(line);

            fileWriter.close();

            System.out.println("Dati Scritti senza Errori");

        } catch (Exception e) {e.printStackTrace();}

    }
}