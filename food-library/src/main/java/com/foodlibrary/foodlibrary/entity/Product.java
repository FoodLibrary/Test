package com.foodlibrary.foodlibrary.entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name="product")
public class Product {
    @Id
    @Column(name="prdlstreportno")
    private String prdlstreportno;

    @Column(name = "prdlstnm")
    private String prdlstnm;

    @Column(name = "manufacture")
    private String manufacture;

    @Column(name = "category")
    private String category;

    @Column(name = "img")
    private String img;

    @Column(name = "rawmtrl")
    private String rawmtrl;

    @Column(name = "nutrient")
    private String nutrient;

    @Column(name = "allergy")
    private String allergy;

    @Column(name = "productHashtag")
    private String productHashtag;

    @Column(name = "likecount")
    private int likecount;

    @Column(name = "zzimcount")
    private int zzimcount;

}
