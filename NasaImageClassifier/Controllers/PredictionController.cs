using Microsoft.AspNetCore.Mvc;
using NasaImageClassifier.Database;
using NasaImageClassifier.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NasaImageClassifier.Controllers
{
    public class PredictionController : Controller
    {
        private readonly DatabaseContext _context;

        public PredictionController(DatabaseContext context)
        {
            _context = context;
        }
        [HttpPost("ImageURL")]
        public async Task<IActionResult> PostImageURL(string imageURL)
        {
            _context.ImagePredictions.Add(new ImagePrediction { ImageUrl = imageURL} );
            
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
