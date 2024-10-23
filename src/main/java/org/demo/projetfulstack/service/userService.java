package org.demo.projetfulstack.service;

import org.demo.projetfulstack.modele.Car;
import org.demo.projetfulstack.modele.User;
import org.demo.projetfulstack.repository.carRepo;
import org.demo.projetfulstack.repository.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class userService {

    @Autowired
    private userRepo userrepo;
    public List<User> getAllUsers() {
        List<User> users=new ArrayList<>();
        userrepo.findAll().forEach(users::add);
//moduleRepository.findAll().forEach(m->modules.add(m));
        return users;
    }
    public void addUser(User user) {
        userrepo.save(user);
    }
    public Optional<User> getUserId(Integer id) {
        return userrepo.findById(id);
    }


}
