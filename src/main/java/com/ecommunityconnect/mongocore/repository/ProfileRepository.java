package com.ecommunityconnect.mongocore.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.ecommunityconnect.mongocore.entity.Profile;

import reactor.core.publisher.Flux;

public interface ProfileRepository extends ReactiveMongoRepository<Profile, String> {
	Flux<Profile> findByEmail(String email);
}