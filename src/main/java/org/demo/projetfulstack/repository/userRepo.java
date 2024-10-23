package org.demo.projetfulstack.repository;

import org.demo.projetfulstack.modele.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface userRepo extends CrudRepository<User, Integer> {
}