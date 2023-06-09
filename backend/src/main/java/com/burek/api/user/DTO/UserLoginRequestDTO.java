package com.burek.api.user.DTO;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserLoginRequestDTO {

    // Must be a valid email (example@peepo-eats.com) and consist of letters, numbers and
    // some special chars
    @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}", flags = Pattern.Flag.CASE_INSENSITIVE,
            message = "{Email.user.email}")
    private String email;

    // Must be longer than 7 characters, shorter than 60 characters and have at least one number and one letter
    @Size(max = 60, message = "{Size.max.user.password}")
    @Size(min = 7, message = "{Size.min.user.password}")
    @Pattern(regexp = "^.*[a-zA-Z].*[0-9].*$", message = "{Pattern.user.password}")
    private String password;

}
