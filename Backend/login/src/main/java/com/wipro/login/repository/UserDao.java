package com.wipro.login.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wipro.login.model.DAOUser;

@Repository
public interface UserDao extends CrudRepository<DAOUser, Integer> {
    DAOUser findByEmail(String email);

}
