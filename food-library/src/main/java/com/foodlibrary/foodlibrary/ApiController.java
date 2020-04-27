package com.foodlibrary.foodlibrary;

import crawling.BlogCrawling;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;


@RestController
public class ApiController {

    BlogCrawling blogCrawling = new BlogCrawling();

    @GetMapping("/api/foodlibrary")
    public HashMap<String, Integer> foodlibrary() {
        //WebDriver

        return blogCrawling.frequencyCount(blogCrawling.trimTag());
    }

}