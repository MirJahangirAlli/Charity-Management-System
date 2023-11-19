package com.example.backend.RequestDTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class DonorRequest {

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String state;
    private String country;
    private String pincode;
    private String paymentAmount;
}
