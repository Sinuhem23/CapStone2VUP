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
import com.example.FullStackReact.service.UserService;
import com.example.FullStackReact.exception.ResourceNotFoundException;
import com.example.FullStackReact.model.User;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")

public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/allusers")
	public List<User> getAllUsers()
	{
		
		return userService.findAll();
	}
	
	@PostMapping("/adduser")
    public User newUser(@RequestBody User s)
    {
		
		return userService.save(s);
    }
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable int id)
	{
		try {
			User s = userService.findById(id);
			return ResponseEntity.ok(s);
		} catch (Exception e) {
			throw new ResourceNotFoundException("User not found");
		}                
	}
	
	@GetMapping("/users/{name}")
	public List<User> getUserByName(@PathVariable String name)
	{
		//return studentRepo.findByName(name);
		
		List <User> users=userService.findByName(name);
		if(users.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("User(s) with the name "+ name +" not found"));
		}
		
		return userService.findByName(name);
	}
	
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user)
	{
		try {
			User s = userService.findById(id);
			s.setName(user.getName());
			s.setEmail(user.getEmail());
			User updatedUser=userService.save(s);
			return ResponseEntity.ok(updatedUser);
		} catch (Exception e) {
			throw new ResourceNotFoundException("User not found");
		} 
		
	}
	
	@DeleteMapping("/user/{id}")
	public String deleteUser(@PathVariable int id)
	{
		try {
			userService.findById(id);
			userService.deleteById(id);
			return "The user with id: "+ id +" is removed from the database.";
			
		} catch (Exception e) {
			throw new ResourceNotFoundException("User not found");
		} 
		
	}
	
}
