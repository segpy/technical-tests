package com.pruebatecnica.back_proteccion.models;

public class JSONResponse {
    private String state;
    private String message;
    private String data;


    public JSONResponse(String state, String message, String data) {
        this.state = state;
        this.message = message;
        this.data = data;
    }

    public JSONResponse(String state, String message) {
        this.state = state;
        this.message = message;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
