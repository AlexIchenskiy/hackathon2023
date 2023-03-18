package com.burek.hackathon.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class UserRequestDto {
    private Long id;
    @Email(message = "Email is not valid", regexp="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}",
            flags = Pattern.Flag.CASE_INSENSITIVE)
    private String email;
    @Pattern(regexp = "/^(?=.*[!?#$%^&*])(?=.*[0-9])/g")
    private String password;
}
