package com.epharma.backend.repositories;

import com.epharma.backend.domain.User;
import com.epharma.backend.exceptions.EtAuthException;

public interface UserRepository {

  Integer create (String firstName, String lastName, String email,
                  String password) throws EtAuthException;

  User findByEmailAndPassword(String email, String password)
    throws EtAuthException;

  Integer getCountByEmail(String email);

  User findById(Integer userId);
}
