
using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helprs
{
    public class ProductUrlResolver : IValueResolver<Product, ProductsToReturnDto, string>
    {
        private readonly IConfiguration Config;
        public ProductUrlResolver(IConfiguration config)
        {
            this.Config = config;
        }

        public string Resolve(Product source, ProductsToReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                return Config["ApiUrl"] + source.PictureUrl;
            }

            return null;
        }
    }
}