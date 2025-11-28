package com.healthcare.ui;

import com.healthcare.utils.BaseTest;
import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class AppointmentUITest extends BaseTest {

    @Test
    public void appointmentUI() {
        driver.get("http://localhost:3000");

        driver.findElement(By.xpath("//input[@placeholder='Patient']")).sendKeys("Jane");
        driver.findElement(By.xpath("//input[@placeholder='Doctor']")).sendKeys("Doe");
        driver.findElement(By.xpath("//input[@placeholder='Date']")).sendKeys("2025/12/1");

        driver.findElement(By.xpath("//button[text()='Save Appointment']")).click();
    }
}
