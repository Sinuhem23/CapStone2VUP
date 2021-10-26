package com.example.FullStackReact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.example.FullStackReact.fileservice.ws.FileStorageProperties;

@SpringBootApplication
//@EnableConfigurationProperties({
//	FileStorageProperties.class
//})
public class VehicleUpBackEnd1Application {

	public static void main(String[] args) {
		SpringApplication.run(VehicleUpBackEnd1Application.class, args);
	}

}
