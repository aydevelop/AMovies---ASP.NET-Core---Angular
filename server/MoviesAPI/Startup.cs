using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using MoviesAPI.Filters;
using MoviesAPI.Services;

namespace MoviesAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers(options =>
            {
                options.Filters.Add(typeof(MyExceptionFilter));
            });

            services.AddTransient<MyActionFilter>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
            services.AddResponseCaching();
            services.AddSingleton<IRepository, InMemoryRepository>();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "MoviesAPI", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //app.Run(async context =>
            //{
            //    await context.Response.WriteAsync("pipeline ....");
            //});

            //app.Map("/map1", (app) =>
            //{
            //    app.Run(async context =>
            //    {
            //        await context.Response.WriteAsync("pipeline ....");
            //    });
            //});

            //app.Use(async (context, next) =>
            //{
            //    await context.Response.WriteAsync("pipeline2 ....");
            //});


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //app.UseSwagger();
                //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "MoviesAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseResponseCaching();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
