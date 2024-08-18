package com.sunless.groupThree.Repository;

import com.sunless.groupThree.Model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
}
