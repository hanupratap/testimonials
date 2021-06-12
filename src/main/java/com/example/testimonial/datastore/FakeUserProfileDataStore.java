package com.example.testimonial.datastore;

import com.example.testimonial.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile(UUID.randomUUID(), "janetjones", null));
        USER_PROFILES.add(new UserProfile(UUID.randomUUID(), "antoniojunior", null));
        USER_PROFILES.add(new UserProfile(UUID.randomUUID(), "rajatsharma", null));
        USER_PROFILES.add(new UserProfile(UUID.randomUUID(), "arnabgoswami", null));
    }

    public List<UserProfile> getUserProfiles(){
        return USER_PROFILES;
    }

}
