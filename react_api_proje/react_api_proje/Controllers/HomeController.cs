using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using react_api_proje.Models;
using System.Linq;

namespace react_api_proje.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly React_ApiContext _sql;
        public HomeController(React_ApiContext sql)
        {
            _sql = sql;
        }
        public List<User> Get()
        {

            return _sql.Users.ToList();
        }
        [HttpGet("id")]
        public User Get(int id)
        {

            return _sql.Users.SingleOrDefault(x => x.UserId == id);
        }
        [HttpPost]
        public void Post(User user)
        {
            _sql.Users.Add(user);
            _sql.SaveChanges();
        }
        [HttpDelete("id")]
        public void Delete(int id)
        {
            _sql.Users.Remove(_sql.Users.SingleOrDefault(x => x.UserId == id));
            _sql.SaveChanges();
        }
        [HttpPut("id")]
        public void Put(int id, User user)
        {
            User old = _sql.Users.SingleOrDefault(x => x.UserId == id);
            old.UserName = user.UserName;
            old.UserPassword = user.UserPassword;
            old.UserSurname = user.UserSurname;
            old.UserDescription = user.UserDescription;
            _sql.SaveChanges();
        }
    }

}
