package com.burek.hackathon.repository;

import com.burek.hackathon.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // query methods
    User findByEmail(String email);
}