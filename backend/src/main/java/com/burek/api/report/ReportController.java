package com.burek.api.report;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/report")
public class ReportController {

    private final ReportService reportService;

    public ReportController(@Qualifier("reportServiceImpl") ReportService reportService) {
        this.reportService = reportService;
    }

    @RequestMapping(value = "/getall", method = RequestMethod.POST)
    public ResponseEntity<List<Report>> getAll() {
        return new ResponseEntity<>(reportService.findAll(), HttpStatus.OK);
    }

}
