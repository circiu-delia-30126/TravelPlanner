package com.travelplanner.model;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "destinations")
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String country;
    private String description;
    private String imageUrl;
    private Double rating;
} 