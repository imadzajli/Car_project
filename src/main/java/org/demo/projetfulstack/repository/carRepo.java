package org.demo.projetfulstack.repository;

import org.demo.projetfulstack.modele.Car;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface carRepo extends CrudRepository<Car, Integer> {
    Optional<Car> findByMark(String mark);
}