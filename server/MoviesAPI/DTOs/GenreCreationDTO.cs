﻿using MoviesAPI.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.DTOs
{
    public class GenreCreationDTO
    {
        [Required(ErrorMessage = "The field with {0} is required")]
        [StringLength(10)]
        [FirstLetterUppercase]
        public string Name { get; set; }
    }
}
