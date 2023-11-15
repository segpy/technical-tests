package com.pruebatecnica.back_proteccion.services;

import com.pruebatecnica.back_proteccion.models.JSONResponse;
import com.pruebatecnica.back_proteccion.utils.FibonacciUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class MailService {
    @Autowired
    private JavaMailSender mailSender;
    private String[] destinatarios = {"sebastiangomez@gmail.com", "jsgomezv@correo.udistrital.edu.co"};
    private String subject = "Prueba Tecnica - Juan Sebastian Gomez Valencia - SpringBoot";


    public void sendMail(String user) {
        sendMail(subject, destinatarios, user);
    }

    public void sendMail(String subject, String user) {
        sendMail(subject, destinatarios, user);
    }

    public String createBodyMail() {
        Map<String, Object> mapData = getLocalTime();
        long x = (int) mapData.get("x");
        long y = (int) mapData.get("y");
        int n = (int) mapData.get("segundos");
        FibonacciUtils fibonacciUtils = new FibonacciUtils();
        List<Long> fiboResult = fibonacciUtils.generateFibonacciSeries(x, y, n);
        Collections.reverse(fiboResult);
        String mensageHeader = "Cordial saludo señores Protección,\n" +
                "\nMe tome el atrevimiento de enviarles este correo con el resultado de la prueba con la tecnología SpringBoot. Ayer la presente en Django,  dado que es el lenguaje que manejo a diario y con el que sabía que podría entregarla al 100%. Lo envío hasta ahora, pues por temas laborales no habia podido. Les agradezco mucho la oportunidad y espero la tengan  en cuenta, realmente quiero hacer parte de este equipo de trabajo. \n \n";

        return mensageHeader + String.format("\nLa hora actual es: %s \n" +
                "\nLa serie de fibonacci es: %s \n" +
                "\nUsuario valido: admin \n" +
                "\nLink del proyecto postman: https://www.postman.com/winter-sunset-254163/workspace/pruebaproteccion/collection/23180770-1abe32c1-aa93-4cc7-a9d0-b3de2a4cbdbb?action=share&creator=23180770 \n" +
                "\nEndpoints validos: /fibo/get y /fibo/send mas informacion en el link de Postman \n" +
                "\nLink del despliegue: https://back-springboot-prot.onrender.com/fibo/get?x=5&y=9&n=59 \n" +
                "\nLink del repositorio: https://github.com/segpy/back_spring_prot \n" +
                "\nLink del drive: https://drive.google.com/drive/folders/1e-gRl8BcEAo3n6cHdZhRmMWSSw-jHZvU?usp=sharing \n" +
                "\n \nEste correo fue enviado desde una aplicacion creada con SpringBoot.", mapData.get("hora"), fiboResult.toString());
    }

    public void sendMail(String subject, String[] toSend, String user) throws MailException {
        if (!user.equals("admin")) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "No tienes permisos para usar este servicio"
            );
        }
        String body = createBodyMail();
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(toSend);
        mail.setSubject(subject);
        mail.setText(body);

        mailSender.send(mail);
    }

    public Map<String, Object> getLocalTime() {
        Map<String, Object> mapData = new HashMap<>();
        LocalTime localTime = LocalTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss"); // Define el formato deseado
        String formattedTime = localTime.format(formatter);

        mapData.put("hora", formattedTime);
        mapData.put("minutos", localTime.getMinute());
        int x = localTime.getMinute() / 10; // División entera para obtener el dígito en la posición de las decenas
        int y = localTime.getMinute() % 10; // Módulo para obtener el dígito en la posición de las unidades
        mapData.put("x", x);
        mapData.put("y", y);
        mapData.put("segundos", localTime.getSecond());

        return mapData;
    }
}
