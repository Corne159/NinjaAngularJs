using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using TestAngularJS.Models;

namespace TestAngularJS.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Header()
        {
            return PartialView("~/Views/Shared/_nav.cshtml");
        }

        public IActionResult Dashboard()
        {
            return PartialView("~/Views/Ninjas/Dashboard.cshtml");
        }

        public IActionResult Ninjas()
        {
            return PartialView("~/Views/Ninjas/Index.cshtml");
        }

        public IActionResult RandomNinja()
        {
            return PartialView("~/Views/Ninjas/Random.cshtml");
        }

        public IActionResult Contact()
        {
            return PartialView("~/Views/Info/Contact.cshtml");
        }

        public IActionResult ContactSuccess()
        {
            return PartialView("~/Views/Info/Contact-Success.cshtml");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}