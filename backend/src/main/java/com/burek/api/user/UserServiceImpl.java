package com.burek.api.user;

import com.burek.api.user.DTO.UserLoginRequestDTO;
import com.burek.api.user.DTO.UserRegistrationRequestDTO;
import com.burek.api.user.exception.UserAlreadyExistsException;
import com.burek.api.user.exception.UserBadCredentialsException;
import com.burek.api.JWT.JwtResponse;
import com.burek.api.JWT.JwtTokenUtil;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserRegistrationRequestToUser registrationRequestToUser;

    public UserServiceImpl(UserRepository userRepository, AuthenticationManager authenticationManager,
                           JwtTokenUtil jwtTokenUtil, UserRegistrationRequestToUser regReqToUserMapper) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.registrationRequestToUser = regReqToUserMapper;
    }

    @Override
    public User add(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public JwtResponse register(UserRegistrationRequestDTO userDetails) throws Exception {
        // check if username/email is already registered
        if (userRepository.findByUsername(userDetails.getUsername()) != null) {
            throw new UserAlreadyExistsException(userDetails.getUsername());
        } else if (userRepository.findByEmail(userDetails.getEmail()) != null) {
            throw new UserAlreadyExistsException(userDetails.getEmail());
        } else {
            User user = registrationRequestToUser.mapToEntity(userDetails);
            Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
            authorities.add(new SimpleGrantedAuthority(UserRole.USER.toString()));
            user.setAuthorities(authorities);
            this.add(user);
            authenticate(user.getUsername(), user.getPassword(), user.getAuthorities());
            return new JwtResponse(jwtTokenUtil.generateToken(user));
        }
    }

    @Override
    public JwtResponse login(UserLoginRequestDTO userDetails) throws Exception {
        User user = userRepository.findByEmail(userDetails.getEmail());
        if (user == null) {
            throw new UserBadCredentialsException(userDetails.getEmail());
        }
        authenticate(user.getUsername(), userDetails.getPassword(), user.getAuthorities());

        return new JwtResponse(jwtTokenUtil.generateToken(user));
    }

    private void authenticate(String username, String password, Set<GrantedAuthority> authorities) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    username, password, authorities));
        } catch (Exception e) {
            throw new UserBadCredentialsException(username);
        }
    }

}
