// Sample code for the code comparison sections
export const legacyCode = `public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
        
        var result = CalculateTotal(100, 0.2);
        Console.WriteLine("Total: " + result);
    }
    
    public static decimal CalculateTotal(decimal amount, decimal taxRate)
    {
        // Calculate tax
        decimal tax = amount * taxRate;
        
        // Return total
        return amount + tax;
    }
}`;

export const modernCode = `public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
        
        var result = CalculateTotal(100, 0.2m);
        Console.WriteLine($"Total: {result}");
    }
    
    public static decimal CalculateTotal(decimal amount, decimal taxRate)
    {
        // Calculate tax
        decimal tax = amount * taxRate;
        
        // Return total
        return amount + tax;
    }
}`;
