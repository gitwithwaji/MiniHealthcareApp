package com.healthcare.ui;

import com.healthcare.utils.BaseTest;
import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class ClaimUITest extends BaseTest {

    @Test
    public void claimUI() {
        driver.get("http://localhost:3000");

        driver.findElement(By.xpath("//input[@placeholder='Patient Name']")).sendKeys("Jane");
        driver.findElement(By.xpath("//input[@placeholder='Insurance Provider']")).sendKeys("Doe");
        driver.findElement(By.xpath("//input[@placeholder='Claim Amount']")).sendKeys("2500.00");

        driver.findElement(By.xpath("//button[text()='Save Claim']")).click();
    }
}
