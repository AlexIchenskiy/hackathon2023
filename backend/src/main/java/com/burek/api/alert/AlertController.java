package com.burek.api.alert;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alert")
public class AlertController {

    private final AlertService alertService;

    public AlertController(@Qualifier("alertServiceImpl") AlertService alertService) {
        this.alertService = alertService;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody Alert alert) {
        return new ResponseEntity<>(alertService.add(alert), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/getall", method = RequestMethod.POST)
    public ResponseEntity<List<Alert>> getAll() {
        return new ResponseEntity<>(alertService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public ResponseEntity<?> deleteById(@PathVariable(value = "id") Long id) {
        alertService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
