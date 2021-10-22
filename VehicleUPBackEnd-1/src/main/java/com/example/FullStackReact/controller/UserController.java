package com.example.FullStackReact.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FullStackReact.repository.UserRepository;
import com.example.FullStackReact.exception.ResourceNotFoundException;
import com.example.FullStackReact.model.User;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")

public class UserController {
	
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/allusers")
	public List<User> getAllUsers()
	{
		
		return userRepo.findAll();
	}
	
	@PostMapping("/adduser")
    public User newUser(@RequestBody User s)
    {
		
		return userRepo.save(s);
    }
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable int id)
	{
		User s= userRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("User not found"));
		return ResponseEntity.ok(s);                 
	}
	
	@GetMapping("/users/{name}")
	public List<User> getUserByName(@PathVariable String name)
	{
		//return studentRepo.findByName(name);
		
		List <User> users=userRepo.findByName(name);
		if(users.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("User(s) with the name "+ name +" not found"));
		}
		
		return userRepo.findByName(name);
	}
	
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user)
	{
		User s= userRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("User not found"));
	    s.setName(user.getName());
	    s.setEmail(user.getEmail());
	    User updatedUser=userRepo.save(s);
	    return ResponseEntity.ok(updatedUser);
	}
	@DeleteMapping("/user/{id}")
	public String deleteUser(@PathVariable int id)
	{
		userRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("user not found"));
	    userRepo.deleteById(id);
	    return "The user with id: "+ id +" is removed from the database.";
	}
	
    

}
