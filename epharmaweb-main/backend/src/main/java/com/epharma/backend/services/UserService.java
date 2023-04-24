package com.epharma.backend.services;

import com.epharma.backend.domain.User;
import com.epharma.backend.exceptions.EtAuthException;

public interface  UserService {

  User ValidateUser(String email, String password)
    throws EtAuthException;

  User registerUser(String firstName, String lastName, String email,
                    String password) throws EtAuthException;


}





