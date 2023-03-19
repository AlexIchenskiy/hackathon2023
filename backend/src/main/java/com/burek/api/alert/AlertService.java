package com.burek.api.alert;

import java.util.List;

public interface AlertService {

    Alert add(Alert threat);
    List<Alert> findAll();
    void deleteById(Long id);

}
