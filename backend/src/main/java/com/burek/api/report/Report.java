package com.burek.api.report;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String source;
    private String location;
    private String potential_impact;
    @Enumerated
    private ReportSeverity severity;
    @Enumerated
    private ReportType type;
    private Timestamp timestamp;

}
