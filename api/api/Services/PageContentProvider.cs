using System.Collections.Generic;

namespace api.Services
{
    public class PageContentProvider
    {
        public object Get(string pageId) => PageContent[pageId];

        private static Dictionary<string, object> PageContent = new Dictionary<string, object>
        {
            ["home"] = new { Title = "Home" },
            ["factorial"] = new { Title = "N!" },
            ["fibonacci"] = new { Title = "Fib(n)" },  // Himani 1 : Changet the value fibonnaci to fibonacci : Issue Solved - 1
            ["randomSquare"] = new { Title = "Random square" }
        };
    }
}