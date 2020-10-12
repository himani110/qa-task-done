
using System;

namespace api.Services
{
    public class RandomSquareCalculator
    {
        public double Calculate(int max)
        {
            var n = new RandomNumber().Get(max);
            return Math.Pow(n, 2);
        }
    }
}