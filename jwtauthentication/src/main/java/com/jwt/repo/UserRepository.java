package com.jwt.repo;

import com.jwt.model.User;
import org.apache.juli.logging.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Log> {

    User findByUsername(String username);
}
