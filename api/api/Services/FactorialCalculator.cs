using System;

namespace api.Services
{
    public class FactorialCalculator
    {
        private const int MaxN = 10;

        public int Calculate(int n) => n > MaxN
            ? throw new NotSupportedException($"n > {MaxN} is not supported")
            : Factorial(n);

        private static int Factorial(int n) // Himani 3 : Functionality of Function Changed.
        {
            //var x = 1;
            var result = n;
            if (n ==0 || n==1)
            {
                return 1;
            }
            while (n > 1)
            {
             n--;
             result=result*n;
             
            } 
            return result;
        }
    }
}