using System;

namespace _00001_MinMax
{
    class Program
    {
        static long[] miniMaxSum(int[] arr)
        {
            long[] ar = new long[arr.Length];
            long? min = null;
            long? max = null;
            
            for (int i = 0; i < arr.Length; i++)
            {
                for (int j = 0; j < arr.Length; j++)
                {
                    if (i != j)
                    {
                        ar[i] += arr[j];
                    }
                }
            }
            for (int i = 0; i < arr.Length; i++)
            {
                if (min == null)
                    min = ar[i];
                if (max == null)
                    max = ar[i];

                if (min > ar[i])
                    min = ar[i];

                if (max < ar[i])
                    max = ar[i];
            }
            return new long[2] { Convert.ToInt64(min), Convert.ToInt64(max) };
        }

        static void Main(string[] args)
        {
            int[] arr = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp));

           var x = miniMaxSum(arr);

            Console.WriteLine(x[0] + " " + x[1]);

            Console.ReadKey();
        }
    }
}
