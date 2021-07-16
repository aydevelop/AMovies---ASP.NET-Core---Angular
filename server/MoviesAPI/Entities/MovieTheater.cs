using System.ComponentModel.DataAnnotations;
using System.Drawing;

namespace MoviesAPI.Entities
{
    public class MovieTheater
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength: 100)]
        public string Name { get; set; }
        public Point Location { get; set; }
    }
}
