package com.burek.api.threat;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThreatServiceImpl implements ThreatService {

    private final ThreatRepository threatRepository;

    public ThreatServiceImpl(ThreatRepository threatRepository) {
        this.threatRepository = threatRepository;
    }

    @Override
    public Threat add(Threat threat) {
        return threatRepository.save(threat);
    }

    @Override
    public List<Threat> findAll() {
        return threatRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        threatRepository.deleteById(id);
    }

}
