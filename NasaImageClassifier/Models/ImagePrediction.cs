using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NasaImageClassifier.Models
{
    public class ImagePrediction
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Prediction { get; set; }
    }
}
