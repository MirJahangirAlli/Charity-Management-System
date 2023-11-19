package com.example.backend.Controller;

import com.example.backend.Model.Doner;
import com.example.backend.Repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/home")
public class MainController {


    @Autowired
    private DonorRepository donorRepository;

    @GetMapping("")
    public List<Doner> getPaymentDetails(){
        return donorRepository.findAll();
    }
}
