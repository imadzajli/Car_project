package org.demo.projetfulstack.web;

import org.demo.projetfulstack.modele.Car;
import org.demo.projetfulstack.modele.User;
import org.demo.projetfulstack.service.carService;
import org.demo.projetfulstack.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class userController {
    @Autowired
    private userService moduleService;
    @RequestMapping("/all_users")

    public List<User> get_all_cars(){
        return moduleService.getAllUsers();
    }

    @RequestMapping("/user/{id}")
    public Optional<User> get_car_by_id(@PathVariable Integer id) {
        return moduleService.getUserId(id);
    }


    @RequestMapping(method = RequestMethod.POST,value = "/user")
    public void add_car(@RequestBody User user){
        moduleService.addUser(user);
    }

}