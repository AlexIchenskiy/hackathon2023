package com.burek.api.threat;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/threat")
public class ThreatController {

    private final ThreatService threatService;

    public ThreatController(@Qualifier("threatServiceImpl") ThreatService threatService) {
        this.threatService = threatService;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody Threat threat) {
        return new ResponseEntity<>(threatService.add(threat), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/getall", method = RequestMethod.POST)
    public ResponseEntity<List<Threat>> getAll() {
        return new ResponseEntity<>(threatService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public ResponseEntity<?> deleteById(@PathVariable(value = "id") Long id) {
        threatService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
