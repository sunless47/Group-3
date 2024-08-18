package com.sunless.groupThree.Controller;

import com.sunless.groupThree.Model.Wallet;
import com.sunless.groupThree.Service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WalletController {

    @Autowired
    private WalletService walletService;

    // add new wallet
    @PostMapping("/add")
    public ResponseEntity<Wallet> addWallet(@RequestBody Wallet wallet) {
        Wallet addedWallet = walletService.addWallet(wallet);
        return new ResponseEntity<>(addedWallet, HttpStatus.CREATED);
    }

    // get all wallets
    @GetMapping("/")
    public List<Wallet> getAllWallets(){
        return walletService.getAllWallets();
    }
}