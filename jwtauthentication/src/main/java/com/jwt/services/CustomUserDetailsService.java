package com.jwt.services;

import com.jwt.model.CustomUserDetails;
import com.jwt.model.User;
import com.jwt.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        User user = this.userRepository.findByUsername(userName);

        // user database
        if (user == null) {
            throw new UsernameNotFoundException("User not found!!");
        } else {
            return new CustomUserDetails(user);
        }


        // static user
//        if (userName.equals("Umesh")) {
//            return new User("Umesh", "umesh12", new ArrayList<>());
//        } else {
//            throw new UsernameNotFoundException("User not found !!!");
//        }

    }
}
