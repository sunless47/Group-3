package com.sunless.groupThree.Service;

import com.sunless.groupThree.Model.Wallet;
import com.sunless.groupThree.Repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WalletService {

    @Autowired
    private WalletRepository walletRepository;

    // add new wallet to the database
    public Wallet addWallet(Wallet wallet) {
        return walletRepository.save(wallet);
    }

    // get all wallets
    public List<Wallet> getAllWallets() {
        return walletRepository.findAll();
    }
}
