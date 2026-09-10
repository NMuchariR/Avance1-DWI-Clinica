package com.avance1DWI.clinica_backend.dto;

public class AuthResponse {
    private String token;
    private String nombre;
    private String apellido;
    private String rol;

    public AuthResponse(String token, String nombre, String apellido, String rol) {
        this.token = token;
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
}