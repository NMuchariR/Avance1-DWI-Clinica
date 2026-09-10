package com.avance1DWI.clinica_backend.config;

import com.avance1DWI.clinica_backend.entity.Usuario;
import com.avance1DWI.clinica_backend.enums.Rol;
import com.avance1DWI.clinica_backend.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        if (usuarioRepository.findByCorreo("admin@clinica.com").isEmpty()) {
            Usuario admin = new Usuario(
                    "Jhon",
                    "Sallo",
                    "admin@clinica.com",
                    passwordEncoder.encode("sallo123"),
                    Rol.ADMINISTRADOR
            );
            usuarioRepository.save(admin);
            System.out.println(">> Usuario ADMINISTRADOR creado: admin@clinica.com");
        }

        if (usuarioRepository.findByCorreo("mlopez@gmail.com").isEmpty()) {
            Usuario paciente = new Usuario(
                    "Miguel",
                    "Lopez",
                    "mlopez@gmail.com",
                    passwordEncoder.encode("lopez123"),
                    Rol.PACIENTE
            );
            usuarioRepository.save(paciente);
            System.out.println(">> Usuario PACIENTE creado: mlopez@gmail.com");
        }
    }
}