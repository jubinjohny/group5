using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Scaffolding.Metadata;
using Microsoft.Extensions.Configuration;
using Shopping.Data;
using Shopping.Models;

namespace Shopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class productsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public productsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Post: api/products

        [HttpPost]
        public JsonResult Post(product product)
        {
            string query = @"Select * from product where productId=@productId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ShoppingContext");
            SqlDataReader reader;
            using (SqlConnection con = new SqlConnection(sqlDataSource))
            {
                con.Open();
                using (SqlCommand command = new SqlCommand(query, con))
                {
                    command.Parameters.AddWithValue("@productId", product.productId);
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    con.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}
