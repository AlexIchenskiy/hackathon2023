package com.burek.hackathon.service.impl;

import com.burek.hackathon.dto.request.UserRequestDto;
import com.burek.hackathon.dto.response.UserResponseDto;
import com.burek.hackathon.exception.ApiRequestException;
import com.burek.hackathon.model.User;
import com.burek.hackathon.repository.UserRepository;
import com.burek.hackathon.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User add(UserRequestDto userRequestDto) {
        return userRepository.save(modelMapper.map(userRequestDto, User.class));
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(UserRequestDto userRequestDto) {
        User user = userRepository.findByEmail(userRequestDto.getEmail());
        if (userRequestDto.getEmail() != null) {
            user.setEmail(userRequestDto.getEmail());
        }
        if (userRequestDto.getPassword() != null) {
            user.setPassword((userRequestDto.getPassword()));
        }
        return user;
    }

    @Override
    public void deleteById(Long id) {
        userRepository.findById(id).orElseThrow(() -> new ApiRequestException("User doesn't exist by id: " + id));
        userRepository.deleteById(id);
    }

    @Override
    public UserResponseDto findByEmail(String email) {
        return modelMapper.map(userRepository.findByEmail(email), UserResponseDto.class);
    }
}
