using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NasaImageClassifier.Models
{
    public class ImagePrediction
    {
        public int Id { get; set; }

        [StringLength(500)]
        public string ImageUrl { get; set; }

        [StringLength(100)]
        public string Prediction { get; set; }
    }
}
