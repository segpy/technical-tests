package com.pruebatecnica.back_proteccion;

import com.pruebatecnica.back_proteccion.utils.FibonacciUtils;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class FibonacciSerieTests {

    @Test
    public void testGenerateFibonacciSeries() {
        int x = 2;
        int y = 3;
        int n = 4; // Cantidad de términos en la serie
        FibonacciUtils fibonacciUtils = new FibonacciUtils();
        List<Long> result = fibonacciUtils.generateFibonacciSeries(x, y, n);

        int[] expectedValues = {x, y, 5, 8, 13, 21};
        for (int i = 0; i < expectedValues.length; i++) {
            assertEquals(expectedValues[i], result.get(i), "ERROR: No hay relacion en el termino " + i);
            System.out.println("Aserción exitosa para el término " + i);
        }
    }

}
