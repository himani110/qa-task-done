using System;

namespace api.Services
{
    public class RandomNumber
    {
        public int Get(int max)
        {
            if (max <= 0)
            {  
                throw new Exception($"{nameof(max)} must be > 0");
            }

            var random = new Random();
            return random.Next(0, max);
        }
    }
}