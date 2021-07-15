using Domain.Photo;
using Microsoft.AspNetCore.Http;

namespace Domain.Inerfaces
{
    public interface IPhotoAccessor
    {
        PhotoUploadResult AddPhoto(IFormFile file);
        string DeletePhoto(string publicId);
    }
}
