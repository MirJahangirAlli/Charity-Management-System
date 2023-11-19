package com.example.backend.Service;


import com.example.backend.Model.Doner;
import com.example.backend.Repository.DonorRepository;
import com.example.backend.RequestDTO.DonorRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DonorServiceImp implements DonorService {


    @Autowired
    private DonorRepository donorRepository;


    @Override
    public Doner makeDonation(Doner doner) {
        return donorRepository.save(doner);
    }
}
