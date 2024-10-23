package org.demo.projetfulstack.service;

import org.demo.projetfulstack.modele.Car;
import org.demo.projetfulstack.repository.carRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class carService {
    @Autowired
    private carRepo carrepo;
    public List<Car> getAllCar() {
        List<Car> cars=new ArrayList<>();
        carrepo.findAll().forEach(cars::add);
//moduleRepository.findAll().forEach(m->modules.add(m));
        return cars;
    }
    public void addCar(Car car) {
        carrepo.save(car);
    }
    public Optional<Car> getCarId(Integer id) {
        return carrepo.findById(id);
    }
    public void modifyCar(Integer id,Car car){
        carrepo.save(car);
    }
    public void deleteCar(Integer id) {
        carrepo.deleteById(id);
    }
    public Optional<Car> getCarByMark(String mark) {
        return carrepo.findByMark(mark);
    }

}