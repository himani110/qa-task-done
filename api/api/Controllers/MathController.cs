using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api
{
    [ApiController]
    [Route("api/math")]
    public class MathController : ControllerBase
    {
        private readonly FactorialCalculator _factorialCalculator;
        private readonly FibonacciCalculator _fibonacciCalculator;
        private readonly RandomSquareCalculator _randomSquareCalculator;

        public MathController(
            FactorialCalculator factorialCalculator,
            FibonacciCalculator fibonacciCalculator,
            RandomSquareCalculator randomSquareCalculator)
        {
            _factorialCalculator = factorialCalculator;
            _fibonacciCalculator = fibonacciCalculator;
            _randomSquareCalculator = randomSquareCalculator;
        }

        [HttpGet("factorial/{n}")]
        public IActionResult GetFactorial(int n) => Ok(new CalculationResponse(_factorialCalculator.Calculate(n)));

        [HttpGet("fibonacci/{n}")]
        public IActionResult GetFibonacci(int n) => Ok(new CalculationResponse(_fibonacciCalculator.Calculate(n)));

        [HttpGet("random-square/{n}")]
        public IActionResult GetRandomSquare(int n) => Ok(new CalculationResponse(_randomSquareCalculator.Calculate(n)));

        private class CalculationResponse
        {
            public CalculationResponse(double result) => Result = result;

            public double Result { get; set; }
        }
    }
}