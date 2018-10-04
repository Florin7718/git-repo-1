package home;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = {WebServer.class})
public class WebServer {

  public static void main(String[] args) {
    SpringApplication.run(WebServer.class, args);
  }
}
