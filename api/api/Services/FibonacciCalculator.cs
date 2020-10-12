using System;

namespace api.Services
{
    public class FibonacciCalculator
    {
        private const int MaxN = 10;

        public int Calculate(int n) => n > MaxN
            ? throw new NotSupportedException($"n > {MaxN} is not supported")
            : Fib(n);

         private static int Fib(int n)   // Himani 4 : New Conditions added [if n==0 , n==1 ]
         {
             var result = n;
             if (n == 0)
             {
                 return 0;
             }
             if (n ==1)
             {
                 return 1;
             }
             else
             {
                 return Fib(n-1)+Fib(n-2);
             }
         }
    }
}
