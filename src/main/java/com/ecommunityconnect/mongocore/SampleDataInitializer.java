package com.ecommunityconnect.mongocore;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.ecommunityconnect.mongocore.entity.Profile;
import com.ecommunityconnect.mongocore.repository.ProfileRepository;

import reactor.core.publisher.Flux;

import java.util.UUID;


@Component
@org.springframework.context.annotation.Profile("demo") 
public class SampleDataInitializer
    implements ApplicationListener<ApplicationReadyEvent> {
	private static final Logger log = LogManager.getLogger(SampleDataInitializer.class);
    private final ProfileRepository repository; 

    public SampleDataInitializer(ProfileRepository repository) {
        this.repository = repository;
    }

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        repository
            .deleteAll() 
            .thenMany(
                Flux
                    .just("A", "B", "C", "D")
                    .map(name -> new Profile(UUID.randomUUID().toString(), name + "@email.com")) 
                    .flatMap(repository::save) 
            )
            .thenMany(repository.findAll()) 
            .subscribe(profile -> log.info("saving " + profile.toString())); 
    }
}