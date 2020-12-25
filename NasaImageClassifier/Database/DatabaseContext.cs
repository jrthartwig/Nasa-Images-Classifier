using Microsoft.EntityFrameworkCore;
using NasaImageClassifier.Models;


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
