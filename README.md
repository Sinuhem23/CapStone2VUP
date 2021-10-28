# VehicleUP

Not fully ready to upload videos

### Full Stack Web Application.

The purpose of this project is to show the process of developing a Full Stack Web Application that uses the MVC architecture. It showcases a Vehicle Upload web app where users can save, view, update and delete vehicle videos.

- Front End
  React JavaScript web application that communicates with the Back End by performing all the CRUD operations (Create, Read, Update and Delete). This application serves as the View component in the MVC model.

- Back End
  The Back End consists of two parts:

Java Spring based application that servers as the Controller component of the MVC model by accepting HTTP requests from the View component and converting them to commands for the Model, then sending data back to the View for it to display.

MySQL database that servers as the Model component of the MVC architecture by providing a dynamic data structure, independent of the user interface.

Note: This Full Stack application runs on a local device.
Installation instructions:

Since this application is designed to run locally, to see it in action you will need to run it on your machine. (Localhost:3000)

- Install Node.js.
- Create a React JS application.
- Install the following packages
- Material UI
- Axios
- React Router DOM
- Copy the Front End folder code of this repository to your React JS application.
- Before running the application, make sure that your Back End is set up and running
- Installation instructons.

## If you want to run this Full Stack application 
You have to perform this Back End installations before installing and running the Front End:

Install MySQL Community and select Developer installation during the installation process. Make sure to save your root password on a safe place. Once installed, open MySQL command line (it will ask for your root password to access it). Then create a database called to_do_list and a table called task inside of it, with the structure shown on point 2 of this document.

Install Spring Tools 4 for Eclipse. Once installed, open Spring Tools Suite, create a new Spring Starter Project using Maven, Java 11, and the following dependencies:

Spring Boot DevTools.
Spring Data JPA.
MySQL driver.
Spring Web.
Then copy the code on this repository to your Spring application location. Edit the aplication.properties file (located on the resources folder) and change the password to the one you are using for the root user on your MySQL database.

Run the Spring application, and then you are ready to run your React Application on the Front End.
