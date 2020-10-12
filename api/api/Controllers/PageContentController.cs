using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api
{
    [ApiController]
    [Route("api/content")]
    public class PageContentController : ControllerBase
    {
        [HttpGet("{pageId}")]
        public IActionResult Get(string pageId) => Ok(new PageContentProvider().Get(pageId));
    }
}