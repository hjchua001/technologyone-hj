namespace HJ_Test.Utilities;

/// <summary>
/// Re-useable validation helper
/// </summary>
public class ValidationHelper
{
    /// <summary>
    /// Checks if the string input is parse-able to decimal <br />
    /// Output value does not matter and will be discarded
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public static bool IsNumericalInputValid(string input, out decimal value)
        => decimal.TryParse(input, out value);

    /// <summary>
    /// Checks if the decimal has more than two decimal places
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public static bool IsMoreThanTwoDecimalPlaces(decimal input)
        => input != Math.Floor(input * 100) / 100m;
}
