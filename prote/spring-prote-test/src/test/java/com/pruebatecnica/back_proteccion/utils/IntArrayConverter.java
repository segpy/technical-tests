package com.pruebatecnica.back_proteccion.utils;

import org.junit.jupiter.params.converter.ArgumentConverter;
import org.junit.jupiter.params.converter.SimpleArgumentConverter;

import java.util.ArrayList;
import java.util.Arrays;

public class IntArrayConverter extends SimpleArgumentConverter {

    @Override
    protected Object convert(Object source, Class<?> targetType) {
        if (source instanceof String) {
            String[] stringValues = ((String) source).split(",");
            int[] intValues = new int[stringValues.length];
            for (int i = 0; i < stringValues.length; i++) {
                intValues[i] = Integer.parseInt(stringValues[i]);
            }
            return intValues;
        }
        throw new IllegalArgumentException("Invalid input: " + source);
    }

}
