using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace FactorialCalculatorTest
{
	class FactorialTest						
    {
        private const string V = "http://localhost:3001/api/math/factorial/8";
        IWebDriver driver;

        [SetUp]
		//public void startBrowser()
        //{
          //  driver = new ChromeDriver("D:\\3rdparty\\chrome");
        //}

        [Test]
		public void test()
        {
            RestClient client = new RestClient("http://localhost:3001");
            RestRequest request = new RestRequest("api/math/factorial/8", Method.GET);

            //act
            IRestResponse response = client.Execute(request);

            // assert
            Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            //driver.url(V);
            // Arrange: Define the endpoint to be tested
            //string requestUri = "http://foo.bar/record/01";
            // Act: Make the request (Note: MakeRequest is a method I wrote in another class)
            //HttpResponseMessage response = httpClient.MakeRequest(HttpMethod.Get, requestUri);
            // Assert: The request returns a successful response
            //Console.WriteLine(response.IsSuccessStatusCode);
            //Assert.IsTrue(response.IsSuccessStatusCode, "Response was not a success status code!");

        }

        [TearDown]
		public void closeBrowser()
        {
            driver.Close();
        }

    }
}