package crawling;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BlogCrawling {

    //WebDriver
    private ChromeDriver driver;

    //Properties
    public static final String WEB_DRIVER_ID = "webdriver.chrome.driver";
    public static final String WEB_DRIVER_PATH = "chromedriver";

    //크롤링 할 URL
    private String base_url;

    //검색할 키워드
    public String keyword = "홈런볼";
    public List<String> keywords = new ArrayList<>();

    public BlogCrawling() {
        super();
        //System Property SetUp
        System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);
        //Driver SetUp
        driver = new ChromeDriver();
        base_url =  "https://search.naver.com/search.naver?where=post&sm=tab_jum&query=" + keyword;
        crawl();
    }


    public void getPost(ChromeDriver driver) {
        driver.get(base_url);
        List<WebElement> posts = driver.findElements(By.cssSelector(".sh_blog_title._sp_each_url._sp_each_title"));
        for (WebElement post : posts) {
            post.click();
            getTag(driver);
        }
    }

    public void getTag(ChromeDriver driver) {
        List<String> windowHandles = new ArrayList<>(this.driver.getWindowHandles());
        this.driver.switchTo().window(windowHandles.get(1));
        String mainFrame = driver.findElement(By.cssSelector("#mainFrame")).getAttribute("src");
        driver.get(mainFrame);
        List<WebElement> tags = driver.findElements(By.cssSelector(".ell"));
        for(WebElement tag : tags) {
            System.out.println(tag.getText());
        }
        this.driver.close();
        this.driver.switchTo().window(windowHandles.get(0));
    }

    @GetMapping("/api/hello")
    public void crawl() {
        try {
            getPost(driver);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.close();
        }
    }

}
