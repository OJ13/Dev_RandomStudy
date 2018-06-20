using System;

namespace _00002_BirthDayCakeCandles
{
    class Program
    {
        static void Main(string[] args)
        {
            //TextWriter textWriter = new StreamWriter(System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

            int arCount = Convert.ToInt32(Console.ReadLine());
            int[] ar = Array.ConvertAll(Console.ReadLine().Split(' '), arTemp => Convert.ToInt32(arTemp));
            int result = birthdayCakeCandles(ar);

            Console.WriteLine("Proxima linha de Velas apagadas: " + result.ToString());

            Console.ReadKey();
            //textWriter.WriteLine(result);

            //textWriter.Flush();
            //textWriter.Close();
        }

        private static int birthdayCakeCandles(int[] ar)
        {
            int count = 0;
            int max = 0;
            for (int i = 0; i < ar.Length; i++)
            {
                for (int j = 0; j < ar.Length; j++)
                {
                    if (ar[i] == ar[j])
                    {
                        count++;
                    }
                }
                if (count > max)
                {
                    max = count;
                }
                count = 0;
            }
            return max;
        }
    }
}
