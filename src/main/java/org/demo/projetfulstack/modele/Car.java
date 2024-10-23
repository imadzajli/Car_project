package org.demo.projetfulstack.modele;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.NonNull;


@Entity
public class Car {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @NonNull
    private String mark;
    @NonNull
    private String model;
    @NonNull
    private String color;
    @NonNull
    private String immatricule;
    @NonNull
    private int year;
    @NonNull
    private int price;


    public Car(long id, String mark, String model, String color, String immatricule, int year, int price) {
        this.id = id;
        this.mark = mark;
        this.model = model;
        this.color = color;
        this.immatricule = immatricule;
        this.year = year;
        this.price = price;

    }
    public Car() {

    }


    public long getId() {
        return id;
    }

    public @NonNull String getMark() {
        return mark;
    }

    public @NonNull String getModel() {
        return model;
    }

    public @NonNull String getColor() {
        return color;
    }

    public @NonNull String getImmatricule() {
        return immatricule;
    }

    @NonNull
    public int getYear() {
        return year;
    }

    @NonNull
    public int getPrice() {
        return price;
    }



    public void setId(long id) {
        this.id = id;
    }

    public void setMark(@NonNull String mark) {
        this.mark = mark;
    }

    public void setModel(@NonNull String model) {
        this.model = model;
    }

    public void setColor(@NonNull String color) {
        this.color = color;
    }

    public void setImmatricule(@NonNull String immatricule) {
        this.immatricule = immatricule;
    }

    public void setYear(@NonNull int year) {
        this.year = year;
    }



    public void setPrice(@NonNull int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "car{" +
                "id=" + id +
                ", mark='" + mark + '\'' +
                ", model='" + model + '\'' +
                ", color='" + color + '\'' +
                ", immatricule='" + immatricule + '\'' +
                ", year=" + year +
                ", price=" + price +

                '}';
    }
}
