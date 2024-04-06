using HJ_Test.Services;
using HJ_Test.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HJ_Test.Controllers;
[Route("api/[controller]")]
[ApiController]
public class UtilityController : ControllerBase
{
    private readonly UtilityService _utilityService;

    public UtilityController(UtilityService utilityService)
    {
        _utilityService = utilityService;
    }

    /// <summary>
    /// Converts numerical input into words. Validation with TryParse.
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [AllowAnonymous]
    [HttpGet("ConvertInputNumberToWords")]
    [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public IActionResult ConvertInputNumberToWords([FromQuery] string input)
    {
        try
        {
            // check if input is a valid numerical value
            if (!ValidationHelper.IsNumericalInputValid(input, out decimal value))
                return BadRequest("Input is not a valid numerical value. Kindly retry.");

            // should not have negative currency?
            if (value < 0)
                return BadRequest("Input should not be negative.");

            // return error message when decimal places more than 2
            if (ValidationHelper.IsMoreThanTwoDecimalPlaces(value))
                return BadRequest("Input has more than two decimal places. Kindly limit it to two.");

            // convert to double decimal places first, there shouldn't be >= 3 decimal places for money
            return Ok(_utilityService.ConvertInputNumberToWords(Math.Round(value, 2)));
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
