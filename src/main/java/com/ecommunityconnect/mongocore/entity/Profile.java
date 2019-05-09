package com.ecommunityconnect.mongocore.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document 
public class Profile {

	public Profile(){

	}
	public Profile(String id, String email) {
		this.id = id;
		this.email = email;
	}
	
    @Id 
    private String id;
    private String email;

	public String getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}
}