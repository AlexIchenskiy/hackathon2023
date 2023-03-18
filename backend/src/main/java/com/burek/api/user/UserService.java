package com.burek.api.user;

import com.burek.api.user.DTO.UserLoginRequestDTO;
import com.burek.api.user.DTO.UserRegistrationRequestDTO;
import com.burek.api.JWT.JwtResponse;

public interface UserService {

    User add(User user);

    User findByUsername(String username);

    JwtResponse register(UserRegistrationRequestDTO user) throws Exception;
    JwtResponse login(UserLoginRequestDTO user) throws Exception;

}
