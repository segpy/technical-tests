package com.pruebatecnica.back_proteccion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@RestController
public class BackProteccionApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackProteccionApplication.class, args);
    }

    @GetMapping("/test")
    public List<String> getNames() {
        return List.of("Juan", "Pedro", "Maria");
    }

}
