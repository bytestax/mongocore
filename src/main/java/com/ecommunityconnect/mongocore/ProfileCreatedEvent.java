package com.ecommunityconnect.mongocore;

import org.springframework.context.ApplicationEvent;

import com.ecommunityconnect.mongocore.entity.Profile;

public class ProfileCreatedEvent extends ApplicationEvent {

    public ProfileCreatedEvent(Profile source) {
        super(source);
    }
}