package com.burek.api.alert;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "alerts")
public class Alert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String ip;
    private String domain;
    private String service;
    private String cluster;
    private String action_required;
    @Enumerated
    private AlertSeverity severity;
    private Timestamp timestamp;

}
