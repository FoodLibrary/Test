package com.foodlibrary.foodlibrary;

import crawling.BlogCrawling;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;


@RestController
public class ApiController {

    BlogCrawling blogCrawling = new BlogCrawling();

    @GetMapping("/api/foodlibrary")
    public HashMap<String, Integer> crawlingResult() {
        //WebDriver

        return blogCrawling.frequencyCount(blogCrawling.trimTag());
    }

}