package com.burek.api.user;

import com.burek.api.JWT.JwtResponse;
import com.burek.api.user.DTO.UserLoginRequestDTO;
import com.burek.api.user.DTO.UserRegistrationRequestDTO;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(@Qualifier("userServiceImpl") UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<JwtResponse> register(@RequestBody @Valid UserRegistrationRequestDTO userDetails)
            throws Exception {
        return new ResponseEntity<>(userService.register(userDetails), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<JwtResponse> login(@RequestBody @Valid UserLoginRequestDTO userDetails)
            throws Exception {
        return new ResponseEntity<>(userService.login(userDetails), HttpStatus.ACCEPTED);
    }

}
