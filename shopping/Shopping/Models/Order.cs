using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping.Models
{
    public class Order
    {
        public int orderId { get; set; }
        public int orderTotal { get; set; }
        public string email { get; set; }
    }
}
