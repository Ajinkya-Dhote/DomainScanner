package com.domain.scanner.controller;

import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequestMapping("/output")
public class SSEController {
    private final CopyOnWriteArrayList<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @GetMapping()
    public SseEmitter streamSseEvents() throws IOException {
        SseEmitter emitter = new SseEmitter();

        // Add the emitter to the list
        emitters.add(emitter);

        // Remove the emitter when the client disconnects
        emitter.onCompletion(() -> emitters.remove(emitter));

        return emitter;
    }

    public void sendSseEvent(String event) {
        // Iterate over the emitters and send the event to each client
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(event, MediaType.TEXT_PLAIN);
            } catch (IOException e) {
                emitter.complete();
                emitters.remove(emitter);
                e.printStackTrace();
            }
        }
    }

}
