package com.burek.api.threat;

import java.util.List;

public interface ThreatService {

    Threat add(Threat threat);
    List<Threat> findAll();
    void deleteById(Long id);

}
