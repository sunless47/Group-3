package com.sunless.groupThree.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "wallet")
@Data
public class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "phone")
    private double phone;

    @Column(name = "password")
    private String password;

    @Column(name = "balance")
    private double balance;
}
