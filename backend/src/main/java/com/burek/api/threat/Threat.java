package com.burek.api.threat;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "threats")
public class Threat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated
    private ThreatType type;
    private String ip;
    private String domain;
    @Enumerated
    private ThreatSeverity severity;
    private Timestamp timestamp;

}
