package com.pruebatecnica.back_proteccion.controllers;

import com.pruebatecnica.back_proteccion.models.JSONResponse;
import com.pruebatecnica.back_proteccion.services.FiboService;
import com.pruebatecnica.back_proteccion.utils.FibonacciUtils;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fibo")
public class FiboController {
    @Autowired
    private FiboService fiboService;

    @GetMapping("/get")
    private JSONResponse getFibo(HttpServletRequest request) {
        try {
            String fiboResult = fiboService.getFiboResult(request);
            return new JSONResponse(
                    "Ok",
                    "Successfull get fibo",
                    fiboResult
            );
        } catch (MailException e) {
            e.printStackTrace();

            return new JSONResponse(
                    "Error",
                    "Failed to get fibo"
            );
        }

    }
}
