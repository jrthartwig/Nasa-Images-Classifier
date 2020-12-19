using Microsoft.EntityFrameworkCore;
using NasaImageClassifier.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NasaImageClassifier.Database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }
            public DbSet<ImagePrediction> ImagePredictions { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ImagePrediction>().ToTable("ImagePrediction");
        }
    }
}
