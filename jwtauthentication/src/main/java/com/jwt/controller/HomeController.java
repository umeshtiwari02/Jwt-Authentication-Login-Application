package com.jwt.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HomeController {

    @GetMapping("/welcome")
    public String welcome() {

        String text = "This is private page.\n";
        text += "This page is not allowed to unauthorized users.\n";
        text += "Jwt Authentication is working perfectly fine.";

        return text;
    }

    @GetMapping("/getUsers")
    public String getUsers() {

        return "{\"name\":\"Umesh Tiwari\"}";
    }
}
