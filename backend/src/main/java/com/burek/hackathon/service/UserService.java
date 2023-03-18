package com.burek.hackathon.service;

import com.burek.hackathon.dto.request.UserRequestDto;
import com.burek.hackathon.dto.response.UserResponseDto;
import com.burek.hackathon.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User add(UserRequestDto userRequestDto);
    List<User> getAll();
    User updateUser(UserRequestDto userRequestDto);
    void deleteById(Long id);
    UserResponseDto findByEmail(String email);
}
