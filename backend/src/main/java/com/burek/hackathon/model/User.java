package com.burek.hackathon.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.security.core.GrantedAuthority;

import java.util.Set;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String email;
    private String password;
    @ElementCollection
    @Fetch(FetchMode.SELECT)
    @LazyCollection(LazyCollectionOption.FALSE)
    private Set<GrantedAuthority> authorities;
}
