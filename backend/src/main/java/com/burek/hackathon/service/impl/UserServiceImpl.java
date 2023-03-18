package com.burek.hackathon.service.impl;

import com.burek.hackathon.dto.request.UserRequestDto;
import com.burek.hackathon.dto.response.UserResponseDto;
import com.burek.hackathon.model.User;
import com.burek.hackathon.repository.UserRepository;
import com.burek.hackathon.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User add(UserRequestDto userRequestDto) {
        return null;
    }

    @Override
    public List<User> getAll() {
        return null;
    }

    @Override
    public User updateUser(UserRequestDto userRequestDto) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    public UserResponseDto findByUsername(String username) {
        return null;
    }
}
