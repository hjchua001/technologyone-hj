using HJ_Test.Constants;
using System.Text;

namespace HJ_Test.Services;

public class UtilityService
{
    private long _initialDollarValue = 0;

    public string ConvertInputNumberToWords(decimal number)
    {
        // get dollar value, truncate removes all digit after decimal
        long dollarValue = (long)Math.Truncate(number);
        _initialDollarValue = dollarValue;

        // get decimal value, in two decimal places
        int centsValue = (int)Math.Round((number - dollarValue) * 100, 2);

        StringBuilder result = new();

        // get the dollar value to text first
        ConvertToWordsRecursive(result, dollarValue);

        // trim all spaces at the end before proceed
        if (result.Length >= 1 && char.IsWhiteSpace(result[^1]))
            result.Length--;

        if (centsValue > 0)
        {
            // add "dollars" and conjunction when there are cents, only applicable for >1 dollarValue
            if (dollarValue > 0)
                result.Append($" {(dollarValue == 1 ? "dollar" : "dollars")} and ");

            if (centsValue < 20)
                result.Append(NumberConstants.Units[centsValue]);
            else
            {
                result.Append(NumberConstants.Tens[centsValue / 10]);

                if (centsValue % 10 > 0)
                    result.Append($"-{NumberConstants.Units[centsValue % 10]}");
            }

            result.Append($" {(centsValue == 1 ? "cent" : "cents")}");
        }
        else if (dollarValue == 0)
            result.Append("zero dollars");
        else
            result.Append($" {(dollarValue == 1 ? "dollar" : "dollars")}");

        return result.ToString().ToUpperInvariant();
    }

    // recursive method to convert each number individually
    private void ConvertToWordsRecursive(StringBuilder result, long number)
    {
        switch (true)
        {
            case var _ when number == 0:
                return;

            case var _ when number < 20:
                result.Append(NumberConstants.Units[number]);
                break;

            case var _ when number < 100:
                if (number < 20)
                    result.Append(NumberConstants.Units[number]);
                else
                {
                    result.Append(NumberConstants.Tens[number / 10]);

                    if (number % 10 > 0)
                        result.Append($"-{NumberConstants.Units[number % 10]}");
                }
                break;

            case var _ when number < 1000:
                result.Append(NumberConstants.Units[number / 100] + " hundred ");

                long remainder = number % 100;

                if (remainder != 0)
                {
                    if (remainder > 20)
                    {
                        if (_initialDollarValue < 1000000  && remainder % 10 != 0)
                            result.Append("and ");

                        ConvertToWordsRecursive(result, number % 100); 
                    }
                    else
                    {
                        ConvertToWordsRecursive(result, number % 100);
                    }
                }
                break;

            // under one million = hundred thousand
            case var _ when number < 1000000:
                long thousands = number / 1000;
                ConvertToWordsRecursive(result, thousands);
                result.Append(" thousand ");

                ConvertToWordsRecursive(result, number % 1000);
                break;

            // under one billion = hundred million
            case var _ when number < 1000000000:
                long million = number / 1000000;
                ConvertToWordsRecursive(result, million);
                result.Append(" million ");

                ConvertToWordsRecursive(result, number % 1000000);
                break;

            // TODO: handle one billion and above, throw error for now
            default:
                throw new Exception("Please enter numbers between 0 to 999,999,999,999");
        }
    }

}
