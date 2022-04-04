using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping.Models
{
    public class User
    {
        [Key]
        public string email { get; set; }
        public string password { get; set; }
        public string name { get; set; }
        public string userImage { get; set; }
    }
}
