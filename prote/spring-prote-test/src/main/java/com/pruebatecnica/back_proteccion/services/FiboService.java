package com.pruebatecnica.back_proteccion.services;

import com.pruebatecnica.back_proteccion.utils.FibonacciUtils;
import jakarta.servlet.http.HttpServletRequest;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class FiboService {

    public Object[] getFiboSeeds(@NonNull HttpServletRequest request) throws MailException {
        String xSeed = request.getParameter("x");
        String ySeed = request.getParameter("y");
        String n = request.getParameter("n");
        if (xSeed == null || ySeed == null || n == null) {
            System.out.println("Error: x, y, n parameters are required");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "x, y, n parameters are required");
        }
        return new Object[]{Long.parseLong(xSeed), Long.parseLong(ySeed), Integer.parseInt(n)};
    }

    public String getFiboResult(@NonNull HttpServletRequest request) {
        FibonacciUtils fibonacciUtils = new FibonacciUtils();
        Object[] fiboSeeds = getFiboSeeds(request);
        long x = (long) fiboSeeds[0];
        long y = (long) fiboSeeds[1];
        int n = (int) fiboSeeds[2];
        return fibonacciUtils.generateFibonacciSeries(x, y, n).toString();
    }
}
