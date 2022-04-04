using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping.Models
{
    public class review
    {
        public int reviewId { get; set; }
        public string email { get; set; }
        public int productId { get; set; }
        public int rating { get; set; }
        public string text { get; set; }
    }
}
