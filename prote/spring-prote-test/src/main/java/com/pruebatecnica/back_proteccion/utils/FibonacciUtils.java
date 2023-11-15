package com.pruebatecnica.back_proteccion.utils;

import org.apache.juli.logging.Log;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FibonacciUtils {
    public List<Long> generateFibonacciSeries(long x, long y, int n) {
        List<Long> series = new ArrayList<>();
        series.add(x);
        series.add(y);

        for (int i = 0; i < n; i++) {
            long nextTerm = x + y;
            series.add(nextTerm);
            x = y;
            y = nextTerm;
        }
        System.out.println("Generacion de serie fibonacci nueva");
        return series;
    }

}

