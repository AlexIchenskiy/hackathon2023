package com.burek.api.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ExceptionDetailedResponse {

    private String message;
    private List<String> details;

}
