package com.example.backend.RequestDTO;

import lombok.Data;

@Data
public class UserRequest {

    private String firstName;
    private String lastName;
    private String pancardNumber;
    private String email;
    private String city;
    private String country;
    private String state;
    private String pinCode;
    private String paymentAmount;
}
