package com.burek.api.threat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThreatRepository extends JpaRepository<Threat, Long> {
}
