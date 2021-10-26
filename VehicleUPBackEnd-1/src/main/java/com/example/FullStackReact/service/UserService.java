package com.example.FullStackReact.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.example.FullStackReact.exception.ResourceNotFoundException;
import com.example.FullStackReact.model.User;
import com.example.FullStackReact.repository.UserRepository;

//Service class for user functionality

@Service

public class UserService {
	private UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
	
		this.userRepository = userRepository;
	}
//	
//	//Log in Method
//	public User login(String username, String password) {
//		User user = userRepository.findByUsername(username);
//		
//		// if user exists in db
//		if (user != null) {
//			// if password is incorrect
//			if (user.password != password) {
//				throw new ResourceNotFoundException("Incorrect password")
//			}
//		}
//		// else return user
//		return user;
//	}
	
	
	public List<User> findAll()
	{
		return userRepository.findAll();
	}
	public User save(User user)
	{
		return userRepository.save(user);
	}
	public User findById(int id)
	{
		return userRepository.findById(id).orElseThrow();
	}
	public List<User> findByName(String name)
	{
		return userRepository.findByName(name);
	}
	public void deleteById(int id )
	{
		userRepository.deleteById(id);
	}


	public User findByUserName(String username) {
		// TODO Auto-generated method stub
		return userRepository.findByUsername(username);
	}
	
	
	

}
