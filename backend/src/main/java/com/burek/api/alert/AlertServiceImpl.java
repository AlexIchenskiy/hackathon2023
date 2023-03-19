package com.burek.api.alert;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlertServiceImpl implements AlertService {

    private final AlertRepository alertRepository;

    public AlertServiceImpl(AlertRepository alertRepository) {
        this.alertRepository = alertRepository;
    }

    @Override
    public Alert add(Alert threat) {
        return alertRepository.save(threat);
    }

    @Override
    public List<Alert> findAll() {
        return alertRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        alertRepository.deleteById(id);
    }

}
