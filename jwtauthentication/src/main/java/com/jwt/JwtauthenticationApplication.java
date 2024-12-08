package com.jwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JwtauthenticationApplication {

    public static void main(String[] args) {
        SpringApplication.run(JwtauthenticationApplication.class, args);
        System.out.print("Project started....");

    }


    // this code is for generating random user in the database
//    @Autowired
//    private UserRepository userRepository;
//    Random random = new Random();
//
//    public void createUser() {
//        User user = new User();
//        Long id = random.nextLong(500);
//
//        user.setId(id);
//        user.setEmail("user" + id + "@gmail.com");
//        user.setEnabled(true);
//        user.setPassword(id + "user");
//        user.setRole("Admin");
//        user.setUsername("user" + id);
//
//        User newUser = this.userRepository.save(user);
//        System.out.println(newUser);
//    }

}
