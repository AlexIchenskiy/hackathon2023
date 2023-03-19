package com.burek.api.report;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportServiceImpl implements ReportService {

    private final ReportRepository reportRepository;

    public ReportServiceImpl(ReportRepository alertRepository) {
        this.reportRepository = alertRepository;
    }

    @Override
    public Report add(Report threat) {
        return reportRepository.save(threat);
    }

    @Override
    public List<Report> findAll() {
        return reportRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        reportRepository.deleteById(id);
    }

}
