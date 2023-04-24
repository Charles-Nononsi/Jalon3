package com.epharma.backend.ressources;


import com.epharma.backend.domain.User;
import com.epharma.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserResource {

  @Autowired
  UserService userService;

  @PostMapping("/login")

  public ResponseEntity<Map<String, String>> loginUser(@RequestBody Map<String, Object> userMap){
    String email = (String) userMap.get("email");
    String password = (String) userMap.get("password");
    User user = userService.ValidateUser(email, password);
    Map<String, String> map = new HashMap<>();
    map.put("message", "loggedIn successfully");
    return new ResponseEntity<>(map, HttpStatus.OK);

  }


  @PostMapping("/register")
  public ResponseEntity<Map<String, String>> registerUser(@RequestBody Map<String, Object> userMap){

    String firstName = (String) userMap.get("firstname");
    String lastName = (String) userMap.get("lastname");
    String email = (String) userMap.get("email");
    String password = (String) userMap.get("password");
    User user = userService.registerUser(firstName, lastName, email, password);
    Map<String, String> map = new HashMap<>();
    map.put("message", "registeres succesfuly");
    return new ResponseEntity<>(map, HttpStatus.OK);

  }
}
