package com.domain.scanner.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/execute")
public class NmapController {
    private final ExecutorService cachedThreadPool = Executors.newCachedThreadPool();

    @Autowired
    private SSEController sseController;

    @GetMapping(path="/nmap")
    void createConnection(@RequestParam String command) {
        // String command = "nmap -p 80,443 google.com";
        System.out.println("command");
        System.out.println(command);

        cachedThreadPool.execute(() -> {

            // Create ProcessBuilder
            ProcessBuilder processBuilder = new ProcessBuilder();
            processBuilder.command("sh", "-c", command);


            // Start the process
            try {
                Process process = processBuilder.start();

                // Read the output of the process
                BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                    sseController.sendSseEvent(line);
                }

                int exitCode = process.waitFor();
            System.out.println("Exit Code: " + exitCode);

            } catch (IOException | InterruptedException e) {
                e.printStackTrace();
            }
        });
    }
    
}
