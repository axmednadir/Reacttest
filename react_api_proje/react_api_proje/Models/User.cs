using System;
using System.Collections.Generic;

#nullable disable

namespace react_api_proje.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserSurname { get; set; }
        public string UserDescription { get; set; }
        public string UserPassword { get; set; }
    }
}
