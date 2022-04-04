using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shopping.Models;

namespace Shopping.Data
{
    public class ShoppingContext : DbContext
    {
        public ShoppingContext (DbContextOptions<ShoppingContext> options)
            : base(options)
        {
        }

        public DbSet<Shopping.Models.image> image { get; set; }

        public DbSet<Shopping.Models.product> product { get; set; }

        public DbSet<Shopping.Models.review> review { get; set; }
    }
}
