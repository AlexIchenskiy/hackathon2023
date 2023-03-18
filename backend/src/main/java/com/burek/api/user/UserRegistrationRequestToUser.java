package com.burek.api.user;

import com.burek.api.user.DTO.UserRegistrationRequestDTO;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class UserRegistrationRequestToUser {

    public User mapToEntity(UserRegistrationRequestDTO userDetails) {
        User user = new User();
        user.setEmail(userDetails.getEmail());
        user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        user.setAuthorities(Set.of(new SimpleGrantedAuthority(UserRole.USER.toString())));
        return user;
    }

}
