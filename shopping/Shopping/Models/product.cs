using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping.Models
{
    public class product
    {
        public int productId { get; set; }
        public string productName { get; set; }
        public int productPrice { get; set; }
        public string productDescription { get; set; }
    }
}
