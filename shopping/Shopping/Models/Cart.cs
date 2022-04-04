using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping.Models
{
    public class Cart
    {
        public int cartId { get; set; }
        public int productId { get; set; }
        public int cartItemQty { get; set; }
        public string email { get; set; }
        public int price { get; set; }
        public int totalPrice { get; set; }
    }
}
