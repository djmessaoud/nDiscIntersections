using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Task : https://app.codility.com/programmers/task/number_of_disc_intersections/

namespace Codiltiy
{
   public class point:IComparable<point> //Class of points or disks that is comparable
    {
       public int p, r; // Point index[Disk Center] and radius of disk
       public int start, end; // Start of the disk, and its end
       public point(int p, int r) // Constructor for calculating start and end
        {
            this.p = p;
            this.r = r;
            this.start = p - r;
            this.end = p + r;
        }
        public int CompareTo(point B) // Compare two points[Disks] with their Radius
        {
            if (this.r > B.r) return -1;
            else if (this.r < B.r) return 1;
            else return 0;
        }
    }
    internal class Program
    {
      static int solution(int[] A) // Solution function
        {
            int intersections = 0; // Number of intersections
            int length = A.Length; //Number of disks
            point[] points = new point[A.Length]; //Creating array of points(Disks)
            for (int i = 0; i < A.Length; i++) //Adding Disks to our array of disks
            {
                points[i] = new point(i, A[i]);
            }
            Array.Sort(points); // Sorting Disks in Descending order
            //Array.Reverse(points);
            foreach (point pe in points) Console.WriteLine("Point " + pe.p.ToString() + ", " + pe.r.ToString() + " Added ");
            for (int i=0; i < length; i++) //Do the math
            {
                //Functionality here is 
                //If a B disk's start or end is between or equals the start or end of 
                //Disk A, then they intersect.
                for (int j=i+1; j < length; j++)
                {
                    if (intersect(points[i], points[j]))
                        {
                        intersections++;
                        Console.WriteLine("Disk " + points[i].p.ToString() + " intersects with disk " + points[j].p.ToString());
                        }
                }
            }
            return intersections;
        }
        static bool intersect(point A, point B)
        {
            //Same functionality explained above, and also A!=B (no duplicates)
            if (((between(B.start, A.start, A.end)) || (between(B.end, A.start, A.end))) && (A.p!=B.p))
                return true;
           else return false;
        }
        static bool between(int x,int a,int b) // If number is between a range function
        {
            if ((x>=a) && (x<=b)) return true;
            else return false;
        }
        static void Main(string[] args)
        {
            Console.Write("Enter number of Disks : ");
            int N = 0;
            try
            {
                N= int.Parse(Console.ReadLine());
            }catch
            {
                Console.WriteLine("enter a number please!");
            }
            int[] disks = new int[N];
            for (int i = 0; i < N; i++)
            {
                Console.Write("Disk " + i + " radius = ");
                disks[i] = int.Parse(Console.ReadLine());
            }
            Console.WriteLine("We have " + solution(disks).ToString() + " intersections.");
            Console.ReadLine();
        }
    }
}
