package com.devmax.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmax.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
