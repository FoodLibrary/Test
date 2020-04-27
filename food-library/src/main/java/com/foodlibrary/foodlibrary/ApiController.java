package com.foodlibrary.foodlibrary;

import crawling.BlogCrawling;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class ApiController {
    //WebDriver
    private ChromeDriver driver;
    BlogCrawling blogCrawling = new BlogCrawling();

    @GetMapping("/api/foodlibrary")
    public HashMap<String, Integer> foodlibrary() {
        return blogCrawling.frequencyCount(blogCrawling.trimTag());
    }

}