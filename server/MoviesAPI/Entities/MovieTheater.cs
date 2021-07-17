using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;

namespace MoviesAPI.Entities
{
    public class MovieTheater
    {
        public int Id { get; set; }

        [Required]
        [StringLength(maximumLength: 100)]
        public string Name { get; set; }

        [NotMapped]
        public Point Location { get; set; }
    }
}
