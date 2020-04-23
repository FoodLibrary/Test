package com.foodlibrary.foodlibrary;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @GetMapping("/api/foodlibrary")
    public String foodlibrary() {
        return "아 좀 되라 씨빠";
    }

}
