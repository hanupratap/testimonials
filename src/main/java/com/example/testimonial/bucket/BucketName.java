package com.example.testimonial.bucket;

public enum BucketName {

    PROFILE_IMAGE("testimonial-user-data-upload");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }
    
    public String getBucketName() {
        return bucketName;
    }
}
