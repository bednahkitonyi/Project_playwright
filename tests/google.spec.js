using System;
using System.Threading.Tasks;
using Microsoft.Playwright;

class Mainn
{
    public static async Task Main()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser= await playwright.Chromium.LaunchAsync( new BrowserTypeLaunchOptions {Headless=false});
        var context = await browser.NewContextAsync();
        var page = await context.NewPageAsync();
        await page.GotoAsync("https://www.ke.sportpesa.com/en/sports-betting/football-1/", new PageGotoOptions{WaitUntil=WaitUntilState.Load});
        if(page.Url=="https://www.ke.sportpesa.com/en/sports-betting/football-1/")
        {
            Console.WriteLine("Url is exepected");
        }
        else
        {
          Console.WriteLine($"expected,'https://www.ke.sportpesa.com/en/sports-betting/football-1/' but got '{page.Url}'");
        }
        await Task.Delay(2000);
        await context.CloseAsync();
        await browser.CloseAsync();

    }
}

using System;
using System.Threading.Tasks;
using Microsoft.Playwright;

public class DuckDuckGo
{
    public static async Task Main()
    {
        await TestDuckDuckGoSearch();
    }

    public static async Task TestDuckDuckGoSearch()
    {
        using var playright = await Playwright.CreateAsync();
        await using var browser= await playright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions {Headless=false});
        var page  = await browser.NewPageAsync();
        await page.GotoAsync("https://duckduckgo.com");
        await page.FillAsync("css=input[name='q']","playwright documentation\n");
        await page.ClickAsync("css=.searchbox_searchButton__F5Bwq.iconButton_button__6x_9C");
       
       await page.ClickAsync("css=article#r1-0");
         await page.WaitForLoadStateAsync(LoadState.Load);
         string currentUrl =page.Url; 

        if(currentUrl.Contains("https://www.google.com/"))
        {
            Console.WriteLine("Success: the word 'playwright' was found");
        }
        else
        {
            Console.WriteLine("Error : the word 'palaywright' was not found." );

        }
        await browser.CloseAsync();
    }


}


class Program
{
    public static async Task Main()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = false,
        });
        var context = await browser.NewContextAsync();

        var page = await context.NewPageAsync();

        await page.GotoAsync("https://the-internet.herokuapp.com/");

        await page.GetByRole(AriaRole.Link, new() { Name = "Checkboxes" }).ClickAsync();

        await page.GetByRole(AriaRole.Checkbox).First.CheckAsync();

        await page.GetByRole(AriaRole.Checkbox).Nth(1).UncheckAsync();

        await page.GotoAsync("https://the-internet.herokuapp.com/");

        await page.GetByRole(AriaRole.Link, new() { Name = "Dropdown" }).ClickAsync();

        await page.Locator("#dropdown").SelectOptionAsync(new[] { "2" });

        
        await page.GetByRole(AriaRole.Checkbox).First.CheckAsync();
        // check if the first check box is checked 
        var isChecked = await page.GetByRole(AriaRole.Checkbox).First.IsCheckedAsync();
        if(isChecked)
        {
            Console.WriteLine("The first checkbox is selected");
        }
        else
        {
           Console.WriteLine("The first checkbox is not selected");
        }
        
         await browser.CloseAsync();
    }
}



public class DuckDuckGoDemo
{ 
  public static async Task Main()
  {
    await TestDuckDuckGoSearch();
  }

  public static async Task  TestDuckDuckGoSearch()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions{Headless= false});
        var page = await browser.NewPageAsync();
        //navigate to duckduckgo
        await page.GotoAsync("https://duckduckgo.com/");
        //search for "Playwright documentation"
        await page.FillAsync("css= input[name='q']","Playwright documentation\n");
        await page.ClickAsync("css=.searchbox_searchButton__F5Bwq.iconButton_button__6x_9C");

        await page.ClickAsync("css=article#r1-0");
        // waits till navigation ends
        await page.WaitForLoadStateAsync(LoadState.Load);

        string currenturl = page.Url;
        if(currenturl.Contains("https://playwright.dev/"))
        {
            Console.WriteLine("success : The navigated url contains the word 'playwright'.");
        }
        else
        {
            Console.WriteLine("error :The navigated url does not contain the word 'playwright'.");
        }
        await browser.CloseAsync();

    }
    
  }





  using System;
using System.Drawing;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.VisualBasic;
using NUnit.Framework.Internal;

public class Example
{
    public static async Task Main()
    {
        await TestDuckDuckGoSearch();

    }

    public static async Task TestDuckDuckGoSearch()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions {Headless=false});
        var page = await browser.NewPageAsync();
        await page.GotoAsync("https://duckduckgo.com");
        await page.FillAsync("css= input[name='q']","Playwright documentation\n");
        await page.ClickAsync("css=.searchbox_searchButton__F5Bwq.iconButton_button__6x_9C");
        await page.ClickAsync("css=article#r1-0");
        await page.WaitForLoadStateAsync(LoadState.Load);
        string currentUrl = page.Url;
        if(currentUrl.Contains("https://playwright.dev"))
        {
            Console.WriteLine("success : The navigated url contains the word 'playwright'.");
        }
        else
        {
          Console.WriteLine("error :The navigated url does not contain the word 'playwright'.");
        }
        await browser.CloseAsync();
    }
}




using System;
using System.Threading.Tasks;
using Microsoft.Playwright;


class Program
{
    public static async Task Main()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = false,
        });
        var context = await browser.NewContextAsync();

        var page = await context.NewPageAsync();

        await page.GotoAsync("https://the-internet.herokuapp.com/");

        await page.GetByRole(AriaRole.Link, new() { Name = "Checkboxes" }).ClickAsync();

        await page.GetByRole(AriaRole.Checkbox).First.CheckAsync();

        await page.GetByRole(AriaRole.Checkbox).Nth(1).UncheckAsync();
        Console.WriteLine("Unselcted the second option");
        await Task.Delay(2000);

        await page.GotoAsync("https://the-internet.herokuapp.com/");

        await page.GetByRole(AriaRole.Link, new() { Name = "Dropdown" }).ClickAsync();

        await page.Locator("#dropdown").SelectOptionAsync(new[] { "1" });

        await page.Locator("#dropdown").SelectOptionAsync(new[] { "2" });

    }
}




using Microsoft.Playwright;
using System;
using System.Threading.Tasks;

class Program
{
    public static async Task Main()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = false,
        });
        var context = await browser.NewContextAsync();

        var page = await context.NewPageAsync();

        await page.GotoAsync("https://the-internet.herokuapp.com/");

        await page.GetByRole(AriaRole.Link, new() { Name = "Checkboxes" }).ClickAsync();

        await page.GetByRole(AriaRole.Checkbox).Nth(1).UncheckAsync();

        Console.WriteLine("Unchecked the second option");
        await Task.Delay(2000);

        await page.GetByRole(AriaRole.Checkbox).First.CheckAsync();

         Console.WriteLine("checked the first option");
        await Task.Delay(2000);

        await page.GotoAsync("https://the-internet.herokuapp.com/");

        await Task.Delay(2000);

        var isChecked = await page.GetByRole(AriaRole.Checkbox).First.IsCheckedAsync();
        if(isChecked)
        {
            Console.WriteLine("The first checkbox is selected");
        }
        else
        {
           Console.WriteLine("The first checkbox is not selected");
        }
        await Task.Delay(2000);
        await browser.CloseAsync();
    }
}


var isChecked= await page.GetByRole(AriaRole.Checkbox).First.IsCheckedAsync();
if(isChecked)
{
    Console.WriteLine("The first checkbox is selected");
}
else
{
    Console.WriteLine("The first checkbox is unselected");

}

await browser.CloseAsync();





using Microsoft.Playwright;
using System;
using System.Threading.Tasks;

class Program
{
    public static async Task Main()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = false,
        });
        var context = await browser.NewContextAsync();

        var page1 = await context.NewPageAsync();

        await page1.GotoAsync("https://firefox.com");

        var page2 = await context.NewPageAsync();
        await page2.GotoAsync("https://google.com");

        await page1.CloseAsync();
        await page2.CloseAsync();

        
    }
}




using Microsoft.Playwright;
using System;
using System.Threading.Tasks;

class Program
{
    public static async Task Main()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = false,
        });
        var context = await browser.NewContextAsync();

        var page = await context.NewPageAsync();

        await page.GotoAsync("https://the-internet.herokuapp.com/");

        await page.GetByRole(AriaRole.Link, new() { Name = "Multiple Windows" }).ClickAsync();

        var page1 = await page.RunAndWaitForPopupAsync(async () =>
        {
            await page.GetByRole(AriaRole.Link, new() { Name = "Click Here" }).ClickAsync();
        });

    }
}

using Microsoft.Playwright;
using NUnit.Framework;
using System;
using System.Threading.Tasks;

class Program
{
    public static async Task Main()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = false,
        });
        var context = await browser.NewContextAsync();
        var page = await context.NewPageAsync();
        await page.GotoAsync("https://google.com");
        var newPagePromise = page.RunAndWaitForPopupAsync(async()=>
        {
            await page.ClickAsync("text= Open new window");

        });
        var newPage = await newPagePromise;
        var url = newPage.Url;
        Assert.Equals("https://google.com", url);
        
        
        
       

    }
}



//Get request


using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.VisualBasic;
class Program
{
  private static async Task Main()
  {
    var url ="https://reqres.in/api/users?page=2";
    using var client = new HttpClient();
    HttpResponseMessage response = await client.GetAsync(url);
    if(response.IsSuccessStatusCode)
    {
        string responseBody = await response.Content.ReadAsStringAsync();
        Console.WriteLine(responseBody);

    }
    else
    {
        Console.WriteLine("Error :{0}" ,response.ReasonPhrase);
    }


  }
}


// using patch
using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestPlatform.Utilities;
using Newtonsoft.Json;
class Program
{
    private static async Task Main()
    {
        var url = "Https://reqres.in/api/users";
        var payload = new
        {
            name ="Bednah",
            job = "SDET"
        };

        var jsonPayload =JsonConvert.SerializeObject(payload);
        using var client = new HttpClient();
        using var content = new StringContent(jsonPayload,Encoding.UTF8,"application/json");
        HttpResponseMessage respose = await client.PostAsync(url,content);
        if(respose.IsSuccessStatusCode)
        {
            string resposeBody = await respose.Content.ReadAsStringAsync();
            Console.WriteLine(resposeBody);
        }
        else
        {
                Console.WriteLine("error :{0}",respose.ReasonPhrase);
        }

    }
}




using System;
using System.Reflection.Metadata;
using System.Threading.Tasks;
using Microsoft.Playwright;

class program
{
    private static readonly HttpClient client = new HttpClient();
    static async Task Main ()
    {
        string url = "https://reqres.in/api/users?page=2";
        HttpResponseMessage response = await client.GetAsync(url);
        response.EnsureSuccessStatusCode();
        string responseBody= await response.Content.ReadAsStringAsync();
    }
}



//create request
using System;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Playwright;

class Program
{
    private static readonly HttpClient client = new HttpClient();
    static async Task Main ()
    {
        string Url = "https://reqres.in/api/users";
        var content = new StringContent("{\"name\":\"Bednah\",\"job\":\"software engineer\"}", Encoding.UTF8,"application/json");
        using HttpClient client = new HttpClient();
        HttpResponseMessage response = await client.PostAsync(Url,content);
        if(response.IsSuccessStatusCode)
        {
            string responseBody = await response.Content.ReadAsStringAsync();
            Console.WriteLine(response);
        }
        else
        {
             Console.WriteLine("Error :{0}",response.ReasonPhrase);
        }


    }
}


//Delete request
using System;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Playwright;

class Program
{
    private static readonly HttpClient client = new HttpClient();
    static async Task Main ()
    {
        string Url = "https://reqres.in/api/users";
        var client = new HttpClient();
        var response = await client.DeleteAsync(Url);
        if(response.IsSuccessStatusCode)
        {
            Console.WriteLine("Record successfully deleted!");
        }
        else
        {
            Console.WriteLine($"Error:{response.StatusCode}");
        }

    }
}


//succesful log in

using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
class Program
{

    static async Task Main ()
    {
        string Url = "https://reqres.in/api/login";
        using var client = new HttpClient();
        var requestBody= new StringContent("{\"email\":\"eve.holt@reqres.in\",\"password\":\"cityslicka\"}", Encoding.UTF8,"application/json");
        var response = await client.PostAsync(Url,requestBody);
        if(response.IsSuccessStatusCode)
        {
            var responseBody = await response.Content.ReadAsStringAsync();
            Console.WriteLine($"Succefully logged in! Response:{responseBody}");
        }
        else
        {
            Console.WriteLine($"Error :{response.StatusCode}");
        }

    }
}
