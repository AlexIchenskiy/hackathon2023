package com.burek.api.report;

import java.util.List;

public interface ReportService {

    Report add(Report threat);
    List<Report> findAll();
    void deleteById(Long id);

}
