using Microsoft.AspNetCore.Mvc;

namespace MyWebAppBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GreetingController : ControllerBase
    {
        [HttpGet("greeting")]
        public IActionResult GetGreeting()
        {
            return Ok(new { message = "Hello from ASP.NET Core!" });
        }
    }
}
