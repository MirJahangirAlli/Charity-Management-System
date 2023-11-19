package com.example.backend.Controller;


import com.example.backend.Model.Doner;
import com.example.backend.RequestDTO.DonorRequest;
import com.example.backend.Service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {


    @Autowired
    private DonorService donorService;

    @PostMapping("/payment")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Doner> paymentHandler(@RequestBody Doner doner){
        Doner doner1 = donorService.makeDonation(doner);
        return new ResponseEntity<>(doner1,HttpStatus.OK);
    }
}
