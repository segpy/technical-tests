package com.pruebatecnica.back_proteccion.controllers;

import com.pruebatecnica.back_proteccion.models.JSONResponse;
import com.pruebatecnica.back_proteccion.services.MailService;
import com.pruebatecnica.back_proteccion.utils.FibonacciUtils;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.net.ssl.SSLSession;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpHeaders;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Optional;

@RestController
@RequestMapping("/fibo")
public class MailController {
    @Autowired
    private MailService mailService;


    @PostMapping("/send")
    private JSONResponse sendMail(HttpServletRequest request) {
        String body = request.getParameter("body");
        String subject = request.getParameter("subject");
        String user_auth = request.getParameter("user");

        try {
            mailService.sendMail(user_auth);
            return new JSONResponse(
                    "Ok",
                    "Successfull send mail"
            );
        } catch (MailException e) {
            e.printStackTrace();

            return new JSONResponse(
                    "Error",
                    "Failed to send mail"
            );

        }
    }


}
