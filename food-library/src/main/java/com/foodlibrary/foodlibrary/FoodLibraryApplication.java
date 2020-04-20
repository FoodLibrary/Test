package com.foodlibrary.foodlibrary;

import crawling.BlogCrawling;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FoodLibraryApplication {
	public static void main(String[] args) {
		BlogCrawling crawling = new BlogCrawling();
		crawling.crawl();
	}

}
