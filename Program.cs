using System;
using System.Threading.Tasks;
using Microsoft.Playwright;

class Program
{
    public static async Task Main()
    {
        await TestSearch();
    }

    public static async Task TestSearch()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false });
        
        var page = await browser.NewPageAsync();

        await page.GotoAsync("https://duckduckgo.com");
        
    
        await page.FillAsync("css=input[name='q']","computer networking\n");
        await page.ClickAsync("css=.searchbox_searchButton__F5Bwq.iconButton_button__6x_9C");
        await page.ClickAsync("css=article#r1-0");

        await page.WaitForLoadStateAsync(LoadState.Load);

        var currrentUrl = page.Url;

        if(currrentUrl.Contains("https://www.geeksforgeeks.org/basics-computer-networking/"))
        {
            Console.WriteLine("The navigated url contains the word 'computer networki'");
        }
    }


}