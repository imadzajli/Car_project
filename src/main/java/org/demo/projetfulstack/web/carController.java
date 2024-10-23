package org.demo.projetfulstack.web;

import org.demo.projetfulstack.modele.Car;
import org.demo.projetfulstack.service.carService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class carController {
    @Autowired
    private carService moduleService;
    @RequestMapping("/all_cars")

    public List<Car> get_all_cars(){
        return moduleService.getAllCar();
    }

    @RequestMapping("/{id}")
    public Optional<Car> get_car_by_id(@PathVariable Integer id) {
        return moduleService.getCarId(id);
    }
    @RequestMapping("/car/{mark}")
    public Optional<Car> get_car_by_id(@PathVariable String mark) {
        return moduleService.getCarByMark(mark);
    }


    @RequestMapping(method = RequestMethod.POST,value = "/car")
    public void add_car(@RequestBody Car car){
        moduleService.addCar(car);
    }
    @RequestMapping(method = RequestMethod.PUT,value = "/car/{id}")
    public void modify_car(@RequestBody Car car,@PathVariable Integer id) {
        moduleService.modifyCar(id,car);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/car/{id}")
    public void delete_car(@PathVariable Integer id) {
        moduleService.deleteCar(id);
    }

}